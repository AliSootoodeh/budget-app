import React from "react";
import { Form } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import MainButton from "./MainButton";

function MainForm({
  addEntry,
  description,
  setDescription,
  price,
  setPrice,
  isExpense,
  setIsExpense,
}) {
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
      <MainButton addEntry={() => addEntry()} />
    </Form>
  );
}

export default MainForm;
