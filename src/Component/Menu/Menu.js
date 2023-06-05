import React from 'react'
import style from "./Menu.module.css"
import SearchForm from '../SearchForm/SearchForm'

function Menu() {
  return (
    <div className={style.headercontent} >
    <h2 className={style.headertitle}>find your book of choice.</h2><br />
    <p className={style.headertext }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
    <SearchForm/>
</div>
  )
}

export default Menu