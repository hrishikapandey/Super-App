import React from 'react'
import Styles from "./Notfoundpage.module.css"

function Notfoundpage() {
  return (
    <div 
    className={Styles.container}>
    <h1>404 not found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  )
}

export default Notfoundpage