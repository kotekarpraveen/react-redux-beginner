import { ActionTypes } from "../constants/action-types";


const initialState = {
    products:[
        {
            id:1,
            title:"Praveen",
            category:"Programmer"
        },
    ],
}

export const productReducer = (state=initialState,{type,payload}) =>{

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            
            return {...state,products: payload};
    
        default:
            return state;
    }
}

export const selectedProductReducer = (state={}, {type,payload})=>{

    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            
        return {...state, ...payload};

        case ActionTypes.REMOVE_PRODUCT:
            
        return {};
    
        default:
        return state;
    }
}