import React from 'react'
import "../styles/Navbar.css"
import AddTask from './AddTask/AddTask'

const Navbar = () => {
  return (
    <div className='navbar'>
      <section className='navbar-container'>
        <h1>Task Manager</h1>
        <AddTask></AddTask>
      </section>
    </div>
  )
}

export default Navbar