import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartAction";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Cart.css";

const Cart = (props) => {
  const { cart, removeFromCart } = props;
  return (
    <main>
      <Header />
      <section className="container">
        {cart.map((item) => (
          <div className="row">
            <div className="col-md-8">
              <div class="card bg-light shadow border-0 mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={item.food.image}
                      alt="..."
                      className="img-fluid p-2"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body p-3">
                      <h5 class="card-title">{item.food.name}</h5>
                      <small class="card-text text-secondary">
                        {item.food.description}
                      </small>
                      <p class="card-text mt-2">{item.food.price}</p>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="btn btn-danger rounded-pill px-4"
                      >
                        Remove Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cart">

              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
