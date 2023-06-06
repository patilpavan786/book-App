import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Menu from '../../Component/Menu/Menu'
import Books from "../../Component/Books/Books"

function Home() {
  return (
    <div>
    <Navbar/>
    <Menu/>
    <Books />
    </div>
  )
}

export default Home