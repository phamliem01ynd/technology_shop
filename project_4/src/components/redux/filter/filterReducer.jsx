
const initialState = {
    sortPrice:[],
    sortQuantity:[]
}

export const filterReducer = (state = initialState, action) => {
    switch(action.type){
      case 'filter/sortPrice':
        return{
          ...state,
          sortPrice:[

          ]
        }
      default:
        return state
    }
}