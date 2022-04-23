import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';

function App() {

  const [item,setItem] = useState(0);
  const [item2,setItem2] = useState([]);
  

  const handleClick = ()=>{
    setItem2((oldData)=>{
      return [...oldData,item]
    })
    setItem('')
  }
  const handleChange = (e)=>{
    setItem(e.target.value)
  }
  const deleteItems=(id)=>{
    setItem2((old)=>{
      return old.filter((arrElem,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input onChange={handleChange} type="text" placeholder='Enter items' value={item} />
          <button onClick={handleClick}> + </button>

          <ol>
            {item2.map((valueItem,index) => {
            return <TodoList key={index}
             id={index}
              text={valueItem}
              onSelect={deleteItems}
              />
             })
              }
              </ol>


        </div>
      </div>
    </>
  );
}

export default App;
