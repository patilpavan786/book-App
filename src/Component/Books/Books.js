import React from "react";
import style from "./Books.module.css";
import { useGlobalContext } from "../../context";

function Books() {
  const { books, setCartItems, cartItems } = useGlobalContext();

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  const removeFromCart = (book) => {
    const updatedCart = cartItems.filter((item) => item !== book);
    setCartItems(updatedCart);
  };

 

  return (
    <div className={style.main}>
      <div className={style.booklistcontent}>
        {books.slice(0, 30).map((book, index) => {
          const isBookInCart = cartItems.includes(book);
          return (
            <div className={style.bookitem} key={index}>
              <div className={style.bookitemimg}>
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                  alt="cover"
                />
              </div>
              <div className={style.bookiteminfo}>
                <div className={style.bookiteminfoitem}>
                  <h3>{book.title}</h3>
                </div>

                <div className={style.bookiteminfoitem}>
                  <h5 className={style.text}>
                    Author:{" "}
                    <span className={style.textcapitalize}>
                      {book.author.join(", ")}
                    </span>
                  </h5>
                </div>

                <div className={style.bookiteminfoitem}>
                  <span className={style.textcapitalize}>
                    Total Editions:{" "}
                  </span>
                  <span>{book.edition_count}</span>
                </div>

                <div className={style.bookiteminfoitem}>
                  <span className={style.textcapitalize}>
                    First Publish Year:{" "}
                  </span>
                  <span>{book.first_publish_year}</span>
                </div>

                {isBookInCart ? (
                  <button
                    className={style.btn}
                    onClick={() => removeFromCart(book)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className={style.btn}
                    onClick={() => addToCart(book)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;
