import PropTypes from 'prop-types'
import React from 'react'
import {useState} from 'react'
import './Item.css'

const Item = ({item, removeItemClick, itemClick, saveItemClick}) => {
    const [style, setStyle] = useState({display: 'none'});
    const [visible, setVisible] = useState('hidden');
    const [text, setText] = useState(item.description);

    const editItemClick = () => {
        setVisible('visible')

    }

    const onClickInput = () => {
        setText('')
    }

    if(visible === 'visible')
        return(
            <div className="Item" 
            onMouseEnter={e => {
                setStyle({display: 'block'});
            }}
            onMouseLeave={e => {
                setStyle({display: 'none'})
            }}
        >
            <h style={{visibility: 'hidden'}} className="ItemText" onClick={() => itemClick(item.id)}>{item.description}</h>
            <form style={{visibility: 'visible'}}>
                <input className="InputEdit" onClick={onClickInput} value={text} onChange={(e) => setText(e.target.value)}></input>
            </form>
            <button style={style, {visibility: 'visible'}} onClick={() => saveItemClick(setVisible, text, item.id)} className="ButtonRemove">Save</button>
            <button style={style} className="ButtonRemove" onClick={editItemClick}>Edit</button>
            <button style={style} className="ButtonRemove" onClick={() => removeItemClick(item.id)}>Remove</button>
        </div> 
        )
    else
        return(
            <div className="Item" 
                onMouseEnter={e => {
                    setStyle({display: 'block'});
                }}
                onMouseLeave={e => {
                    setStyle({display: 'none'})
                }}
            >
                <h style={{visibility: 'visible'}} className="ItemText" onClick={() => itemClick(item.id)}>{item.description}</h>
                <form style={{visibility: 'hidden'}}>
                    <input className="InputEdit" onClick={onClickInput} value={text} onChange={(e) => setText(e.target.value)}></input>
                </form>
                <button style={style, {visibility: 'hidden'}} onClick={() => saveItemClick(setVisible, text, item.id)} className="ButtonRemove">Save</button>
                <button style={style} className="ButtonRemove" onClick={editItemClick}>Edit</button>
                <button style={style} className="ButtonRemove" onClick={() => removeItemClick(item.id)}>Remove</button>
            </div>
        )
}


export default Item