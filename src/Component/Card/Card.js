import React from "react";
import { useLocation } from "react-router-dom";
import style from "./Card.module.css";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
function Card() {
    const navigate= useNavigate()
  const location = useLocation();
  const { book } = location.state;
  console.log(book);

  return (
    <>
   
<BsArrowReturnLeft  style={{ width: "3rem", height: "3rem", marginLeft: "2rem" }}  onClick={()=> navigate("/")}/>
      <div className={style.main}>
        <div className={style.inner}>
          <img
            className={style.img}
            src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
            alt="cover"
          />
          <div className={style.detail}>
            <h1> {book.title}</h1>

            <h4 className={style.text1}>
              Author:{" "}
              <span className={style.textcapitalize}>
                {book.author.join(", ")}
              </span>
            </h4>

            <h4 className={style.text2}>
              edition_count:{" "}
              <span className={style.textcapitalize}>{book.edition_count}</span>
            </h4>

            <h4 className={style.text3}>
              first_publish_year:{" "}
              <span className={style.textcapitalize}>
                {book.first_publish_year}
              </span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
