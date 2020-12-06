import * as actions from './actionTypes';

export const  addProduct = (productName)=>{
    return {
        type: actions.ADD_PRODUCT,
        payload:{
            productName:productName
        }
    }
}

export const removeProduct = (id)=>{
    return {
        type: actions.REMOVE_PRODUCT,
        payload:{
            id:id
        }
    }
}