import axios from "axios";
import { take, call, put, fork } from "redux-saga/effects";
import entriesTypes, {
  populateEntriesRedux,
  populateEntryDetailsRedux,
} from "../actions/entries.actions";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  const { data } = yield call(axios, "http://localhost:3001/entries");
  yield put(populateEntriesRedux(data));
}

export function* getEntryDetails(id) {
  const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
  yield put(populateEntryDetailsRedux(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getAllEntriesDetails, entry.id);
  }
}
