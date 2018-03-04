const initialState = {
  categories: [],
};

export default function addCategory(state = initialState, action) {
  if (action.type === 'ADD_CATEGORY'){

    return {
      categories: [...state.categories, action.payload]
    };
  }
  return state;
}