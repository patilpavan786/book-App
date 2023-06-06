import React from "react";
import style from "./Books.module.css";
import { useGlobalContext } from "../../context";
function Books() {
  const { books } = useGlobalContext();
  console.log(books);
  return (
    <div className={style.main}>
      <div className="booklist-content grid">
        {books.slice(0, 30).map((book, index) => {
          return (
            <div className="book-item flex flex-column flex-sb">
              <div className="book-item-img">
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                  alt="cover"
                />
              </div>
              <div className="book-item-info text-center">
                <div className="book-item-info-item title fw-7 fs-18">
                  <span>{book.title}</span>
                </div>

                <div className="book-item-info-item author fs-15">
                  <span className="text-capitalize fw-7">Author: </span>
                  <span>{book.author.join(", ")}</span>
                </div>

                <div className="book-item-info-item edition-count fs-15">
                  <span className="text-capitalize fw-7">Total Editions: </span>
                  <span>{book.edition_count}</span>
                </div>

                <div className="book-item-info-item publish-year fs-15">
                  <span className="text-capitalize fw-7">
                    First Publish Year:{" "}
                  </span>
                  <span>{book.first_publish_year}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;
