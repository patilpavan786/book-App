import React ,{useState} from 'react'
import style from "./SearchForm.module.css"
function SearchForm() {
  const [book, setBook] = useState('')
  return (
    <div>
    <input className={style.input} placeholder='Search For Book' value={book} onChange={(e)=> setBook(e.target.value)}/>
    </div>
  )
}

export default SearchForm