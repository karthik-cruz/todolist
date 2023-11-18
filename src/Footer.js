import React from 'react'

const Footer = (props) => {
    
    
  return (
    <footer>{`${props.list <= 1? "List item" : "List items"} : ${props.list}`}</footer>
  )
}

export default Footer