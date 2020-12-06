import * as actions from './actionTypes';
let lastId =0
export default function reducer(state=[],action){

    switch(action.type){
        case actions.ADD_PRODUCT:
            return [
                ...state,
                {
                    id:++lastId,
                    productName: action.payload.productName,
                    instock:false
                }
            ];
        case actions.REMOVE_PRODUCT:
            return state.filter(product=>product.id !== action.payload.id);
        default:
            return state;



    }

}