const initialStore={
  stock: 20,
}
  

// eslint-disable-next-line import/no-anonymous-default-export
export default(state=initialStore,action)=>{
    if(action.type==="INCRE_STOCK"){
      return{
        ...state,
        stock: state.stock+1,
      }
    }

    if(action.type==="DECRE_STOCK"){
      return{
        ...state,
        stock: state.stock-1,
      }
    }

    return state;
};
