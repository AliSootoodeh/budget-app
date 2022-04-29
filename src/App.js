import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import MainForm from "./components/MainForm";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance
        color="black"
        size="small"
        labelText="YourBalance"
        valueText="2,533.00"
      />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLine isExpense description="somthing new" price="12,000.00" />
      <EntryLine color="green" description="somthing good" price="1,000.00" />
      <MainHeader title="Add new transaction" type="h3" />
      <MainForm />
    </Container>
  );
}

export default App;
