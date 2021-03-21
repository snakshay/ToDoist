

const Doing = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM_DOING':
            return [...state, action.payload];
        case 'REMOVE_ITEM_DOING':
            const newArray = state.filter((obj) => obj !== action.payload)
            state = newArray;
            return state;
        case 'SET_DOING':
            return action.payload;
        default:
            return state;
    }
}
export default Doing;