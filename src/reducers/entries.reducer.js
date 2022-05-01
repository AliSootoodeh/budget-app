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

export default function entriesReducer(state = initialEntries, action) {
  let newEntries;
  switch (action.type) {
    case "ADD_ENTRY":
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    case "REMOVE_ENTRY":
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case "UPDATE_ENTRY":
      newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = { ...action.payload.entry };
      return newEntries;
    default:
      return state;
  }
}
