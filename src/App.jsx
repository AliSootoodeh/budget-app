import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainForm from "./components/MainForm";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";

const initialEntries = [
  { id: 1, description: "somthing new", price: 1200000, isExpense: true },
  {
    id: 2,
    description: "somting amazing",
    price: 200000,
    isExpense: false,
  },
  { id: 3, description: "somting good", price: 100000, isExpense: true },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState(false);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].price = price;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen]);

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

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function editEntry(id) {
    console.log("you are editing entry");
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const { price, description, isExpense } = entries[index];
      setEntryId(id);
      setDescription(description);
      setPrice(price);
      setIsExpense(isExpense);
      setIsOpen(true);
    }
  }

  function addEntry() {
    setEntries((prevEntries) => [
      ...prevEntries,
      {
        id: prevEntries.length + 1,
        price: Number(price),
        isExpense,
        description,
      },
    ]);
    resetEntry();
  }

  function resetEntry() {
    setDescription("");
    setIsExpense(true);
    setPrice("");
  }

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
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        isOpen={isOpen}
        editEntry={editEntry}
      />
      <MainHeader title="Add new transaction" type="h3" />
      <MainForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        price={price}
        setPrice={setPrice}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        addEntry={addEntry}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        setDescription={setDescription}
        price={price}
        setPrice={setPrice}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;
