const titleHandler = (title) => {
    const newTitle = title.split(" ");
    return `${newTitle[0]} ${newTitle[1]} `
}

const cartExistence = (data,id) => {
    const result = !!data.find(item=>item.id === id);
    return result;
}

const quantityCheck = (data,id)=> {
    const index = data.findIndex(item=>item.id === id);
    if(index === -1){
        return false
    }else{
        return data[index].quantity;
    }
}

export {titleHandler,cartExistence,quantityCheck};