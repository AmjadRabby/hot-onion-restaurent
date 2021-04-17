import React, { useEffect } from "react";
import "./food.css";
import { useState } from "react";
import FoodItem from "./FoodItem";
import {Data} from "../../../fakeData/Data";

const Food = () => {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("lunch");
  // console.log(foods);

  useEffect(() => {
    const selected = Data.filter((food) => food.category === category);
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
          <FoodItem food={food} key={food.foodId} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-secondary px-5">Chekout your food</button>
      </div>
    </section>
  );
};

export default Food;
