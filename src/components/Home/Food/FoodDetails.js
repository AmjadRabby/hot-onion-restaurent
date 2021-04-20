import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../../fakeData/Data";
import { FaCartPlus } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { addToCart, removeFromCart } from "../../../redux/actions/cartAction";
import { connect } from "react-redux";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const FoodDetails = (props) => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [category, setCategory] = useState([]);
  const { name, description, price, image, foodId } = item;
  const { cart, addToCart, removeFromCart } = props;

  useEffect(() => {
    const matchFood = data.find((food) => food.foodId === Number(id));
    const matchCategory = data.filter(
      (food) => food.category === matchFood.category
    );
    setItem(matchFood);
    setCategory(matchCategory);
  }, [id]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <main>
      <Header/>
      <section className="container">
        <div className="row mb-5">
          <div className="col-md-6 ">
            <div className="mb-5">
              <h1 className="font-weight-bold mb-4">{name}</h1>
              <p className="text-secondary mb-4">{description}</p>
              <div className="d-flex">
                <h2 className="font-weight-bold">${price}</h2>
                <div className="d-flex justify-content-center align-items-center border rounded-pill px-3 mx-3 mb-4">
                  <h2
                    className="brand-color-hover"
                    onClick={() => removeFromCart(cart.cartId)}
                  >
                    -
                  </h2>
                  <h6 className="px-4 w-100">{cart.length}</h6>

                  <h4
                    className="brand-color-hover"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </h4>
                </div>
              </div>
              <Link
                to="/"
                onClick={() => addToCart(item)}
                className={
                  cart.length
                    ? "btn bg-danger d-flex w-25 align-items-center rounded-pill font-weight-bold text-white px-4"
                    : "btn bg-light d-flex w-25 align-items-center rounded-pill font-weight-bold px-4"
                }
              >
                {" "}
                <FaCartPlus className="mr-2" /> ADD
              </Link>
            </div>

            <div className="mt-5 py-5">
              <Carousel responsive={responsive}>
                {category.map((item) => (
                  <Link
                    key={item.foodId}
                    className="text-decoration-none"
                    to={"/food-details/" + item.foodId}
                  >
                    <img src={item.image} alt="" className="img-fluid px-3" />
                  </Link>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid w-100 p-5 shadow rounded-circle"
              src={image}
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer/>
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
export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails);
