import './App.css';
import React from 'react'
import AddButton from './parts/AddButton';
import Input from './parts/Input';
import Title from './parts/Title';
import Items from './parts/Items' 

import {useState} from 'react'

const App = () => {
  const [text, setText] = useState()
  const [items, setItems] = useState([])
  const [id, setId] = useState(0)

  const addItem = (item) => {
    if(text !== '')
    {
      //console.log(item)
      const newItem = {id, ...item}
      //console.log(newItem)
      setItems([...items, newItem])
      setId(id + 1)
    }
  }

  const removeItem = (id) => {
    const tempItems = items.filter(item => item.id !== id)
    setItems([...tempItems])
  }

  const buttonOnClick = () => {
    addItem({id: id, description: text})
  }

  const areaOnClick = () => {
    setText('')
  }

  const itemOnClick = (id) => { 
    console.log(id);
    removeItem(id)
  }
  
  return(
    <div>
      <Title />
      <Input onClickInputArea={areaOnClick} text={text} setText={setText}/>
      <AddButton add={buttonOnClick}/>
      <Items items={items} itemOnClick={itemOnClick}/>
    </div>
  )
}

export default App;
