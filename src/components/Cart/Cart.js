import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../redux/actions/cartAction";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Cart.css";

const Cart = (props) => {
  const { cart, removeFromCart } = props;
  const totalAmount = cart.reduce(
    (sum, item) => sum + parseInt(item.food.price),
    0
  );
  return (
    <main>
      <Header />
      <section className="container">
        <div className="row">
          <div className="col-md-9" mb="true">
            {cart.map((item) => (
              <div
                key={item.cartId}
                className="card food-cart bg-light shadow border-0 mb-3 "
              >
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src={item.food.image}
                      alt="..."
                      className="img-fluid w-100 p-1"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-2">
                      <h5 className="card-title">{item.food.name}</h5>
                      <small className="card-text text-secondary">
                        {item.food.description}
                      </small>
                      <p className="card-text mt-1 mb-1">{item.food.price}</p>
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
            ))}
          </div>
          <div
            className={
              cart.length === 0
                ? "d-none"
                : "col-md-3 d-flex justify-content-center"
            }
          >
            <div className="cart rounded shadow bg-light p-3">
              <h4 className="">Order Summary</h4>
              <p className="font-weight-bold">Food Ordered: {cart.length}</p>
              <p className="font-weight-bold">Total Amount: ${totalAmount}</p>
              <Link
                to="/delivery-details"
                className="btn btn-danger rounded px-4"
              >
                Proceed Checkout
              </Link>
            </div>
          </div>
        </div>

        {cart.length === 0 && (
          <h4 className="text-center text-danger">
            Cart item is empty <br /> plzz add your favorite food
          </h4>
        )}
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
