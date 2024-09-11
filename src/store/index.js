// creating the store
import {configureStore,createSlice} from '@reduxjs/toolkit';
 
// creating the slice
const expenseSlice=createSlice({
  name:"expenses",
  initialState:[
    {id:1,amount:500,desc:"family dinner",date:"10/05/2024",category:"Dinner" },
    {id:2,amount:5000,desc:"Ganesh murthy",date:"07/09/2024",category:"others" },
    {id:3,amount:5000,desc:"Ganesh murthy",date:"07/09/2024",category:"others" }],
  reducers:{
    AddExpense:(state,action)=>{

      return [...state, {id:( Date.now() * 100 +state.length), ...action.payload}] 
       
    },
    EditExpense:(state,action)=>{
    console.log("i am editExpense",state);
    const edit=action.payload;
    return(
      state.map((expense)=>expense.id==edit.id ? edit : expense)
    )
     
    
     
    
     
    },
    ViewExpense:(state,action)=>{
      return state;
    },
  }
  
});

const expenseStore=configureStore({reducer:{
  expense:expenseSlice.reducer
}})
export const expenseActions=expenseSlice.actions;
export default expenseStore;