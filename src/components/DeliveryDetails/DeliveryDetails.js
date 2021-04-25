import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartAction";
import { Link } from "react-router-dom";

const DeliveryDetails = (props) => {
  const [validation, setValidation] = useState(false);
  const { cart, addToCart, removeFromCart } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm();
  const totalAmount = cart.reduce(
    (sum, item) => sum + parseInt(item.food.price),
    0
  );
  const onSubmit = (data) => {
    console.log(data);
    setValidation(true);
  };

  // console.log(isValid, isDirty);
  return (
    <main className="">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="details">
              <h4 className="border-bottom pb-2 mb-4">
                First Edit Delivery Details
              </h4>
              <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input
                  type="text"
                  defaultValue="Deliver to door"
                  className="form-control bg-light border-0 mb-3"
                  {...register("deliverDoor", { required: true })}
                />
                {errors.deliverDoor && (
                  <span className="text-danger">This field is required</span>
                )}
                <input
                  type="text"
                  defaultValue="107 Rd No 8"
                  className="form-control bg-light border-0 mb-3"
                  {...register("rodNo", { required: true })}
                />
                {errors.rodNo && (
                  <span className="text-danger">This field is required</span>
                )}
                <input
                  type="text"
                  placeholder="Flat,suite or floor"
                  className="form-control bg-light border-0 mb-3"
                  {...register("floor", { required: true })}
                />
                {errors.floor && (
                  <span className="text-danger">This field is required</span>
                )}
                <input
                  type="text"
                  placeholder="Business Name"
                  className="form-control bg-light border-0 mb-3"
                  {...register("businessName", { required: true })}
                />
                {errors.businessName && (
                  <span className="text-danger">This field is required</span>
                )}
                <textarea
                  type="text"
                  placeholder="Add delivery instructor"
                  className="form-control bg-light border-0 mb-3"
                  {...register("addInstructor", { required: true })}
                />
                {errors.addInstructor && (
                  <span className="text-danger">This field is required</span>
                )}
                <input
                  type="submit"
                  name=""
                  id=""
                  className={
                    isDirty
                      ? "form-control btn btn-danger border-0"
                      : "form-control btn btn-secondary border-0 disabled"
                  }
                />
              </form>
            </div>
          </div>
          <div className="col-md-5 px-5">
            <p>
              Form{" "}
              <span className="font-weight-bold">
                Gulshan Plaza Restaura GPR{" "}
              </span>
            </p>
            <p className=""> Arriving in 20-30 min </p>
            <p className="">107 Rd No 8</p>
            <div className="cart-details">
              {cart.map((item) => (
                <div
                  key={item.cartId}
                  className="card bg-light shadow-sm border-0 mb-3"
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.food.image}
                        alt="..."
                        className="img-fluid p-2"
                      />
                    </div>
                    <div className="col-md-5">
                      <div className="card-body p-0">
                        <p className="card-title mb-2">{item.food.name} </p>
                        <p className="card-text font-weight-bold text-danger m-0">
                          ${item.food.price}
                        </p>
                        <small className="text-muted">Delivery free</small>
                      </div>
                    </div>
                    <div className="col-md-3 ">
                      <p
                        onClick={() => removeFromCart(item.cartId)}
                        className="d-flex justify-content-end font-weight-bold btn"
                      >
                        X
                      </p>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="">
                          <span
                            className="brand-color-hover"
                            // onClick={() => removeFromCart(cart.cartI)}
                          >
                            -
                          </span>
                          <span className="bg-white font-weight-bold rounded mx-2 p-1 px-2">
                            {cart.length}
                          </span>

                          <span
                            className="brand-color-hover"
                            onClick={() => addToCart(item)}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="cart rounded shadow bg-light m-1">
                <div className="row p-3 pt-4">
                  <div className="col-md-8">
                    <p className="font-weight-bold mb-1">
                      Subtotal {cart.length} item:
                    </p>
                    <p className="font-weight-bold mb-1">tax: </p>
                    <p className="font-weight-bold mb-1">Delivery fee: </p>
                    <p className="font-weight-bold mb-1">Total :</p>
                  </div>
                  <div className="col-md-4">
                    <p className="font-weight-bold mb-1">${totalAmount}</p>
                    <p className="font-weight-bold mb-1">${cart.length - 1}</p>
                    <p className="font-weight-bold mb-1">$2</p>
                    <p className="font-weight-bold mb-1">
                      ${totalAmount + cart.length - 1 + 2}
                    </p>
                  </div>
                </div>

                <Link
                  to="/order-complete"
                  className={
                    validation
                      ? "btn btn-danger rounded h-25 w-100"
                      : "btn btn-secondary rounded h-25 w-100 disabled"
                  }
                >
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  addToCart: addToCart,
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryDetails);
