

const Done = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM_DONE':
            return [...state, action.payload];
        case 'REMOVE_ITEM_DONE':
            const newArray = state.filter((obj) => obj !== action.payload)
            state = newArray;
            return state;
        case 'SET_DONE':
            return action.payload;
        default:
            return state;
    }
}
export default Done;