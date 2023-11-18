import React from 'react'
import LineItems from './LineItems';

function Lists({items,handleCheckBox,handleDelete}) {
  return (
    <ul>
        
    {items.map((item)=>(
      <LineItems 
        item = {item} 
        key = {item.id}
        handleCheckBox = {handleCheckBox}
        handleDelete = {handleDelete}/>
    ))}
    
  </ul>
  )
}

export default Lists