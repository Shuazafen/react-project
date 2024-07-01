import React,{useEffect, useState} from 'react';
import Item from './Item';

const url = "https://jsonplaceholder.typicode.com/posts";

const List = () => {
const [task, setTask] = useState([])
const getApi = async () => {
    const response = await fetch(url);
    const data = await response.json()
    setTask(data)
    console.log(data)
};

useEffect(() =>{
    getApi()
}, [])
  return (
    <div className='flex justify-around flex-wrap'>
      {task.map(( x) =>(
        
           <Item key={x.id} x={x}/>
            
      ))}
    </div>
  )
}

export default List
