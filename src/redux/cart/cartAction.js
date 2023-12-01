const addItem = (product) => {
    return{
        type:"Add-Item",
        payload:product
    }
}
const deleteItem = (product) => {
    return {
        type:"Delete",
        payload:product
    }
}

export {addItem,deleteItem};