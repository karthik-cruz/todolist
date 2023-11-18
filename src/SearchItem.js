import React from 'react'

function SearchItem(props) {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
    <label htmlFor='search'>Search</label>
    <input
        type ='text'
        id ='search'
        role ='searchbox'
        placeholder='Search items'
        value={props.search}
        onChange={(e)=>props.setSearch(e.target.value)}>
    </input>  
    </form>
  )
}

export default SearchItem