const initialState = {
    cart: [
    ],
	search:[], 
    product: []
}

export const cartReducer = (state = initialState, action) => {
    let newState = [...state.cart]
    switch(action.type){
        case 'cart/add_to_cart':
            return{
                ...state,
                cart: [
                    ...state.cart,
                    action.payload,
                ]
            }
        case 'cart/update_quantity':
            const updateQuantity = newState.find((item) => item.id === action.payload.id)
            updateQuantity.quantity += action.payload.quantity
            return {
                ...state,
                cart: newState
            }
        case 'cart/reduce_quantity':
            const reduceQuantity = newState.find((item) => item.id === action.payload.id)
            reduceQuantity.quantity -= action.payload.quantity
            return {
                ...state,
                cart: newState
            }
        case 'cart/delete_to_cart':
            newState = newState.filter((item) => item.id !== action.payload.id)            
            return{
                ...state,
                cart:newState  
            }
            case 'cart/delete_all':     
            return { 
                ...state, 
                cart: [] 
            };
        case 'search':
					return {
						...state,
						search:[
							action.payload
						]
					}
        case 'filter/productAll':
          return{
            ...state,
            product:[
              ...state,
              action.payload
            ]
          }
        default:
            return state;
    }
}
