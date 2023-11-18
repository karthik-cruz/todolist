import React from 'react'
import { FaPlus } from "react-icons/fa"

function Additem({newItem , setNewItem , handleSumbit}) {
  return (
    <form className='addForm' onSubmit={handleSumbit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add item'
            required
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
            >
        </input>

        <button type='submit'
        aria-label='Add item'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default Additem;