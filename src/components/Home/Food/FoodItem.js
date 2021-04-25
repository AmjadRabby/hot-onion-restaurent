import React from "react";
import { Link } from "react-router-dom";

const FoodItem = ({ food, addToCart }) => {
  const { name, title, price, image, foodId } = food;
  // console.log(props);

  return (
    <section className="col-4 col-md-4 col-sm-6 text-center">
      <Link className="text-decoration-none" to={"/food-details/" + foodId}>
        <div className="card rounded card-item border-0 m-4 mb-3">
          <img
            src={image}
            className="card-img-top img-fluid food-img m-auto"
            alt="..."
          />
          <div className="card-body p-2">
            <h6 className="card-title">{name}</h6>
            <p className="card-text text-secondary">{title}</p>
            <p className="text-dark font-weight-bold">${price}</p>
            <button
              onClick={() => addToCart(food)}
              className="btn btn-outline-danger border-0 font-weight-bold"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default FoodItem;
