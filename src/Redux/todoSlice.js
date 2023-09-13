import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { title: "Confirmed E-mail", id: 1, isDone: true },
    { title: "Request responding", id: 2, isDone: false },
    { title: "New report", id: 3, isDone: false },
  ],
  reducers: {
    addTodo: (state, actions) => {
      //create object todo
      const newTodo = {
        
        title: actions.payload,
        id: uuid(),
        isDone: false,
      };
      //add object 
      state.push(newTodo)
    },
    //delete todo
    deleteTodo:(state,actions)=>{
      const sts = state.filter((t)=>t.id !== actions.payload)
      return sts
    },
    editTodo :(state, actions) => {
      const index = state.findIndex((t)=> t.id===actions.payload)
      state[index].title=prompt('test');
      
     },
     doneNotDone: (state, actions) => {
      return state.map((t)=>
      {if (t.id===actions.payload){
        return{...t,isDone:!t.isDone}}
        else
        {return t}
    })
     
  },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo,deleteTodo,editTodo,doneNotDone } = todoSlice.actions;

export default todoSlice.reducer;
