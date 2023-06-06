import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { useGlobalContext } from "../../context";
import style from "./Cart.module.css";

function Cart() {
  const { books, cartItems, setCartItems } = useGlobalContext();

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  const removeFromCart = (book) => {
    const updatedCart = cartItems.filter((item) => item !== book);
    setCartItems(updatedCart);
  };

  const placeOrder = () => {
    console.log("Placing order:", cartItems);
    alert("Order placed");
    setCartItems([]);
  };

  return (
    <div>
      <Navbar />
      <div className={style.main}>
        <div className={style.booklistcontent}>
          {cartItems.slice(0, 30).map((book, index) => {
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
        <div className={style.cart}>
          <h2>Shopping Cart</h2>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
          {cartItems.length > 0 && (
            <button onClick={placeOrder}>Place Order</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
