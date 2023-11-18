import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

function LineItems(props) {
  return (
    <li className='item' key={props.item.id}>
        <input
          type = "checkbox"
          onChange={()=>props.handleCheckBox(props.item.id)}
          checked = {props.item.checked}
        />


        <label style={(props.item.checked === true)? {textDecoration: "line-through"}: null} 
        onDoubleClick={()=>props.handleCheckBox(props.item.id)}>
        {props.item.item}</label>


        <FaTrashAlt 
          role='button'
          tabIndex="0"
          aria-label={`Delete ${props.item.item}`}
          onClick={()=>props.handleDelete(props.item.id)}
        />
      </li>
  )
}

export default LineItems