import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FoodItem = (props) => {
  const { name, title, price, image, foodId } = props.food;

  return (
    <section className="col-4 text-center">
      <div className="card rounded food-item border-0 m-4 mb-3">
        <img
          src={image}
          className="card-img-top img-fluid food-img m-auto"
          alt="..."
        />
        <div className="card-body p-2">
          <h6 className="card-title">{name}</h6>
          <p className="card-text text-secondary">{title}</p>
          <p className="text-dark font-weight-bold">${price}</p>
        </div>
      </div>
    </section>
  );
};

export default FoodItem;
