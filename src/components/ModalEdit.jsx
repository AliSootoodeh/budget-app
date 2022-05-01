import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { closeEditModalRedux } from "../actions/modals.actions.js";
import useEntryDetails from "../hooks/useEntryDetails";

function ModalEdit({ isOpen, description, price, isExpense, id }) {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, price, isExpense);
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={entryUpdate.description}
          price={entryUpdate.price}
          isExpense={entryUpdate.isExpense}
          setDescription={entryUpdate.setDescription}
          setPrice={entryUpdate.setPrice}
          setIsExpense={entryUpdate.setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModalRedux())}>Close</Button>
        <Button onClick={() => entryUpdate.updateEntry(id)} primary>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
export default ModalEdit;
