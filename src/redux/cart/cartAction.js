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
const decreaseItem = (product) => {
    return {
        type:"Decrease",
        payload:product
    }
} 
const increaseItem = (product) => {
    return {
        type:"Increase",
        payload:product
    }
}
const checkout = () => {
    return {
        type:'checkout'
    }
}

export {addItem,deleteItem,decreaseItem,increaseItem,checkout};