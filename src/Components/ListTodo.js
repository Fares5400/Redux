import Todo from "./Todo";
import { useState } from "react";
import { useSelector } from 'react-redux'
const ListTodo = () => {
  const todos = useSelector((state) => state.todo)
  const [sort, setSort] = useState("all"); 
  console.log('todos',todos.isDone  )
  return (
    <>
      
      <button size="lg" variant="danger" style={{ width: '140px' }}
            onClick={() => setSort("Not completed")}>  Not completed
      </button>

      <button size="lg" variant="success" style={{width:'140px'}}
          onClick={() => setSort("Completed")}> Completed
      </button>

      <button size="lg" style={{background:"#94bbe9",border:'transparent' ,width:'140px'}}
          onClick={() => setSort("all")} >
          All
      </button>
      {todos.length > 0 && sort === "all" ?
          todos.map(job => (
            <Todo  job={job} key={job.id} />)) : null}
          
          {todos.length > 0 && sort === "Completed" ?
          todos.filter(ele => ele.isDone === true).map(job => ( 

            <Todo  job={job} key={job.id} />)) : null}
            
            {todos.length > 0 && sort === "Not completed" ?
          todos.filter(ele => ele.isDone === false).map(job => (
          <Todo  job={job} key={job.id} />)): null}
    </>
  );
};

export default ListTodo;
