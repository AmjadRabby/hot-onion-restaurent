import React from "react";
import "./Home.css";
import DeliveryReviewCard from "../DeliveryReviewCard/DeliveryReviewCard";
import Food from "../Food/Food";

const Home = () => {
  return (
    <div>
      <Food />
      <DeliveryReviewCard />
    </div>
  );
};

export default Home;
