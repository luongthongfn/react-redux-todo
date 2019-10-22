export const addItem = (item) => {
    return ({
        type: "ADD_ITEM",
        item
    })
}

export const removeItem = (index) => {
    return ({
        type: 'REMOVE_ITEM',
        index
    });
}

export const toggle = () => {
    return ({
        type: "TOGGLE_IS_ADDING"
    });
}

export default { addItem, removeItem, toggle };