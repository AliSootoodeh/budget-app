import React from "react";
import { Form } from "semantic-ui-react";
import useEntryDetails from "../hooks/useEntryDetails";
import EntryForm from "./EntryForm";
import MainButton from "./MainButton";

function MainForm() {
  const {
    description,
    setDescription,
    price,
    setPrice,
    isExpense,
    setIsExpense,
    addEntry,
  } = useEntryDetails();
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        setDescription={setDescription}
        price={price}
        setPrice={setPrice}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <MainButton addEntry={addEntry} />
    </Form>
  );
}

export default MainForm;
