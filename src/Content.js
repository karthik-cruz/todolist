import React from 'react'

import Lists from './Lists';


function Content(props) {

  
 
  return (
    <>
    <main> 
      {props.items.length ?
        <Lists 
        items = {props.items} 
        handleCheckBox = {props.handleCheckBox}
        handleDelete = {props.handleDelete} />
      : <p style={{color : "white"}}>No Items :(</p>}
    </main>
  
    </>
  )
}

export default Content