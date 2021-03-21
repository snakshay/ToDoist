

const ToDoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM_ToDo':
            return [...state, action.payload];
        case 'REMOVE_ITEM_ToDo':
            const newArray = state.filter((obj) => obj !== action.payload)
            state = newArray;
            return state;
        case 'SET_ToDo':
            return action.payload;
        default:
            return state;
    }
}
export default ToDoReducer;