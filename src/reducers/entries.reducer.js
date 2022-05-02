import entriesType from "../actions/entries.actions";
const initialEntries = [];

export default function entriesReducer(state = initialEntries, action) {
  let newEntries;
  switch (action.type) {
    case entriesType.POPULATE_ENTRIES:
      return action.payload;
    case entriesType.ADD_ENTRY:
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    case entriesType.REMOVE_ENTRY:
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case entriesType.POPULATE_ENTRIES_DETAILS:
    case entriesType.UPDATE_ENTRY:
      newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = { ...newEntries[index], ...action.payload.entry };
      return newEntries;
    default:
      return state;
  }
}
