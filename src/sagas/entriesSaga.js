import axios from "axios";
import { take, call, put, fork } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  const result = yield call(axios, "http://localhost:3001/entries");
  yield put({ type: entriesTypes.POPULATE_ENTRIES, payload: result.data });
}

export function* getEntryDetails(id) {
  const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
  yield put({
    type: entriesTypes.POPULATE_ENTRIES_DETAILS,
    payload: { id, entry: { data } },
  });
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getAllEntriesDetails, entry.id);
  }
}
