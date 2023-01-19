const initialData = {
  newItem: [],
  quty: 0,
};

export const reducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_DATA": {
      return { ...state, newItem: [...state.newItem, action.payload] };
    }
    default:
      return state;
  }
};
