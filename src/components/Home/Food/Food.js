import React, { useEffect } from "react";
import "./food.css";
import { useState } from "react";
import FoodItem from "./FoodItem";
import { data } from "../../../fakeData/Data";
import { addToCart } from "../../../redux/actions/cartAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Food = (props) => {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("lunch");
  const { cart, addToCart } = props;

  useEffect(() => {
    const selected = data.filter((food) => food.category === category);
    setFoods(selected);
  }, [category]);

  return (
    <section className="container">
      <div className="d-flex justify-content-center mb-5 mt-5">
        <button
          className={
            category === "breakfast"
              ? "btn btn-danger font-weight-bold"
              : "btn btn-outline-danger font-weight-bold"
          }
          onClick={() => setCategory("breakfast")}
        >
          Breakfast
        </button>
        <button
          className={
            category === "lunch"
              ? "btn btn-danger font-weight-bold mx-2"
              : "btn btn-outline-danger font-weight-bold mx-2"
          }
          onClick={() => setCategory("lunch")}
        >
          Lunch
        </button>
        <button
          className={
            category === "dinner"
              ? "btn btn-danger font-weight-bold"
              : "btn btn-outline-danger font-weight-bold"
          }
          onClick={() => setCategory("dinner")}
        >
          Dinner
        </button>
      </div>
      <div className="row">
        {foods.map((food) => (
          <FoodItem addToCart={addToCart} food={food} key={food.foodId} />
        ))}
      </div>
      <div className="text-center">
        <Link
          to="/delivery-details"
          className={
            cart.length
              ? "btn btn-danger px-5"
              : "btn btn-secondary disabled px-5"
          }
        >
          Checkout your food
        </Link>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Food);
