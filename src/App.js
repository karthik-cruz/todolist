import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { useState } from 'react'
import AddItem from './Additem'
import SearchItem from './SearchItem'

function App() {

  const [items,setItems] = useState(JSON.parse(localStorage.getItem("todo_list")));

    const [newItem,setNewItem] = useState('')

    const [search ,setSearch] = useState('')

    const addItem = (item) =>{
      const id = items.length ? items[items.length - 1].id + 1 : 1
      const addNewItem = { id,checked:false,item}
      const listItems = [...items,addNewItem]
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))
    }

    const handleCheckBox = (id) =>{
      const listItems = items.map((item)=> 
      item.id === id ? {...item,checked :!item.checked} : item)
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))
    }

    const handleDelete = (id) =>{
      const listItems = items.filter((item)=>
      item.id !== id)
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))
    }

    const handleSumbit = (e) =>{
      e.preventDefault()
      if(!newItem) return
      addItem(newItem)
      setNewItem('')
    }

  return (
    <>
    <div className='app'>
      <Header title = {"To do List"} />

      <AddItem 
        newItem = {newItem} 
        setNewItem = {setNewItem} 
        handleSumbit = {handleSumbit}
      />

      <SearchItem 
        search = {search} 
        setSearch={setSearch} 
      />

      <Content
        items = {items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))} 
        handleCheckBox = {handleCheckBox}
        handleDelete = {handleDelete}
      />
      <Footer list = {items.length}/>
    </div>
    </>
  )
}

export default App