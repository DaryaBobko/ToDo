
const initialState = [
  'category1',
  'category2'
];

export default function addCategory(state = initialState, action) {
  if (action.type === 'add_category'){

    return [
      ...state,
      action.payload
    ];
  }
  return state;
}
