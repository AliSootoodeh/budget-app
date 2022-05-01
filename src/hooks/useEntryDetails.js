import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import { closeEditModalRedux } from "../actions/modals.actions";

function useEntryDetails(desc = "", val = "", isExp = true) {
  const [description, setDescription] = useState(desc);
  const [price, setPrice] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);

  useEffect(() => {
    setDescription(desc);
    setPrice(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  const id = uuidv4();
  const dispatch = useDispatch();

  function resetEntry() {
    setDescription("");
    setIsExpense(true);
    setPrice("");
  }

  function updateEntry(id) {
    dispatch(updateEntryRedux(id, { id, description, price, isExpense }));
    dispatch(closeEditModalRedux());
  }

  function addEntry() {
    dispatch(
      addEntryRedux({
        id,
        description,
        price,
        isExpense,
      })
    );
    resetEntry();
  }
  return {
    description,
    setDescription,
    price,
    setPrice,
    isExpense,
    setIsExpense,
    addEntry,
    updateEntry,
  };
}

export default useEntryDetails;
