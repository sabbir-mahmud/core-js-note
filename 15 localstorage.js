// get the shopping cart from local storage
const getFromLocal = (item) =>{
    let data = {};
    const storedData = localStorage.getItem(item);
    if(storedData){
        data = JSON.parse(storedData);
    }
    return data;
}

// use local storage to manage cart data
const addToDb =( item, id )=>{
    let data = {};

    //get the shopping cart from local storage
    let storedData =  getFromLocal(item)
    if(storedData){
        data = storedData;
    }

    // add quantity
    const quantity = data[id];
    if(quantity){
        const newQuantity = quantity + 1;
        data[id] = newQuantity;
    }
    else{
        data[id] = 1;
    }
    localStorage.setItem(item, JSON.stringify(data));
}



// remove data from local storage
const removeFromDb = (item, id )=>{
    const data = localStorage.getItem(item);
    if(data){
        const parsedData = JSON.parse(data);
        if(id in parsedData){
            delete parsedData[id];
            localStorage.setItem(item , JSON.stringify(parsedData));
        }
    }
}

// delete all data from local storage
const deleteLocalData = (item) =>{
    localStorage.removeItem(item);
}

// export {
//     addToDb, 
//     getFromLocal,
//     removeFromDb,
//     deleteLocalData
// }