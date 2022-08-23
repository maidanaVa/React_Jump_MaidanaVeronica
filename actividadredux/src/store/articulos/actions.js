//ACCIONES 
const incre_stock=()=>{
    return{
        type:"INCRE_STOCK",
        payload:1,
    }
}

const decre_stock=()=>{
    return{
        type:"DECRE_STOCK",
        payload:-1,
    }
}
export {incre_stock,decre_stock};