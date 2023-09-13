

import { useDispatch } from "react-redux";
import {addTodo} from"../Redux/todoSlice"
import { useState } from 'react';

const AddTodo = () =>{
const dispatch = useDispatch()
const[title,setTitle]= useState("")


return(
    <>
    <input onChange={(event)=>{setTitle(event.target.value)}} placeholder="Add new ToDo"/>
    <button onClick={()=>dispatch(addTodo(title))}>Add</button>
    </>
)
}

export default AddTodo;