import './App.css'

import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useHistory, withRouter } from 'react-router-dom'

import AddButton from './parts/AddButton'
import Input from './parts/Input'
import Title from './parts/Title'
import Items from './parts/Items' 
import ItemInfo from './parts/ItemInfo'

import {useState} from 'react'


const App = () => {
  const [text, setText] = useState()
  const [items, setItems] = useState([])
  const [id, setId] = useState(0)
  const [returnItem, getItem] = useState()
  let history = useHistory()

  const addItem = (item) => {
    if(text !== '')
    {
      const newItem = {id, ...item}
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

  const removeItemClick = (id) => { 
    removeItem(id)
  }

  const itemOnClick = (id) => {
    getItem(...items.filter(item => item.id === id))
    history?.push("/info")
  }
  
  return(
    
      <Switch>
        <Route exact path="/home">
          <div>
            <Title />
            <Input onClickInputArea={areaOnClick} text={text} setText={setText}/>
            <AddButton add={buttonOnClick}/>
            <Items items={items} itemClick={itemOnClick} removeItemClick={removeItemClick}/>
          </div>
        </Route>
        <Route exact path="/info">
          <ItemInfo item={returnItem}/>
        </Route>
      </Switch>
  )
}

export default withRouter(App);
