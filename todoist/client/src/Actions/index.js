export const addItemToDo = (item) => {
    return {
        type: 'ADD_ITEM_ToDo',
        payload: item
    }
}
export const removeItemToDo = (item) => {
    return {
        type: 'REMOVE_ITEM_ToDo',
        payload: item
    }
}
export const setToDo = (todo) => {
    return {
        type: 'SET_ToDo',
        payload: todo
    }
}
export const addItemDoing = (item) => {
    return {
        type: 'ADD_ITEM_DOING',
        payload: item
    }
}
export const removeItemDoing = (item) => {
    return {
        type: 'REMOVE_ITEM_DOING',
        payload: item
    }
}
export const setDoing = (doing) => {
    return {
        type: 'SET_DOING',
        payload: doing
    }
}
export const addItemDone = (item) => {
    return {
        type: 'ADD_ITEM_DONE',
        payload: item
    }
}
export const removeItemDone = (item) => {
    return {
        type: 'REMOVE_ITEM_DONE',
        payload: item
    }
}
export const setDone = (done) => {
    return {
        type: 'SET_DONE',
        payload: done
    }
}

export const removeToDo = () => {
    return {
        type: 'REMOVE_LIST'
    }
}

export const logIn = (user) => {
    return {
        type: 'LOGIN',
        payload: user

    }

}
export const logOut = (user) => {
    return {
        type: 'LOGOUT',
        payload: user

    }
}
