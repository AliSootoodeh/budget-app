import axios from "axios";
import { call, take } from "redux-saga/effects";
import entriesActions from "../actions/entries.actions";

export function* deleteEntrySaga() {
  while (true) {
    const { payload } = yield take(entriesActions.REMOVE_ENTRY);
    yield call(deleteEntry, payload.id);
  }
}

function deleteEntry(id) {
  axios.delete(`http://localhost:3001/entries/${id}`);
}
