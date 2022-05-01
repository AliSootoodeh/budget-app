import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainForm from "./components/MainForm";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import { useSelector } from "react-redux";

function App() {
  const [entry, setEntry] = useState();
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [total, setTotal] = useState(0);
  const { isOpen, id } = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.forEach((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.price));
      }
      return (totalIncomes += Number(entry.price));
    });
    setTotal(totalIncomes - totalExpenses);
    setTotalExpenses(totalExpenses);
    setTotalIncomes(totalIncomes);
  }, [entries]);

  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance
        color="black"
        size="small"
        labelText="YourBalance"
        valueText={total}
      />
      <DisplayBalances
        totalIncomes={totalIncomes}
        totalExpenses={totalExpenses}
      />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />
      <MainHeader title="Add new transaction" type="h3" />
      <MainForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
