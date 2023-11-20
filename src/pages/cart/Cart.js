import React, { useState } from "react";
import "./Cart.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";

const Cart = ({setBarState,barState , productId}) => {
  const [url, setUrl] = useState("");
  const { data, error, isPending } = useFetch(url);
  const [cartData, setCartData] = useState([])

  const [nozima , setNozima] = useState(1)

  var narx = 0


  return (
    <div className="Cart">
      <Navbar setBarState={setBarState} barState={barState}/>
      <main>
        <h1>Your shopping cart</h1>
        <div className="cart_box">
          <div className="top_title">
            <p>Product</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <div className="product_section">


            {
              productId && productId.map((item, i) => {
                narx += Number(item.price)
                return  <div className="box" key={i}>
                <div className="img_part">
                  <img src={item.image} alt="" />
                </div>
                <div className="info_part">
                  <div className="left_part">
                    <h2 className="name">{item.name}</h2>
                    <p className="description">
                      A timeless ceramic vase with a tri color grey glaze.
                    </p>
                    <p className="price">$ {item.price}</p>
                  </div>
                  <div className="right_part">
                    <div className="quantity_box">
                      <div  className="minus" onClick={() => setNozima(nozima - 1)}>
                        -
                      </div>
                      <p className="quantity">{nozima}</p>
                      <div
                        className="plus"  
                        onClick={() => setNozima(nozima + 1)}
                      >
                        +
                      </div>
                    </div>
                    <p className="totalProductPrice">${item.price}  </p>
                  </div>
                </div>
              </div> 
              })
            }

            
          </div>
          <div className="bottom">
            <div className="subtotal">
                <h1>Subtotal</h1>
                <p className="totalPrice">$ {narx}</p>
            </div>
            <p>Taxes and shipping are calculated at checkout</p>
            <button>Go to checkout</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
