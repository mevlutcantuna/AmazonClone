const initialState = {
  basket: [],
  totalPrice: 0,
};

function reducer(state = initialState, action) {
  console.log(action.price)
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.data],
        totalPrice : Number(state.totalPrice + action.price)
      };
    case "REMOVE_FROM_CART":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      if(index >= 0){
        newBasket.splice(index,1); 
      }
      else{
        console.warn(`you cannot remove product (id: ${action.id}) as its nothing`)
      }
      return {...state, basket: newBasket , totalPrice: Number(state.totalPrice - action.price)};
    default:
      return state;
  }
}

export default reducer;
