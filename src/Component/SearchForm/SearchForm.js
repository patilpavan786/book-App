import React, { useState } from "react";
import style from "./SearchForm.module.css";
import { useGlobalContext } from "../../context";

function SearchForm() {
  const [book, setBook] = useState("");
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(book);
    alert("set")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={style.input}
          placeholder="Search For Book"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
     
      </form>
    </div>
  );
}

export default SearchForm;
