import React from "react";
import "./Home.css";
import DeliveryReviewCard from "../DeliveryReviewCard/DeliveryReviewCard";
import Food from "../Food/Food";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <main>
      <Header />
      <Food />
      <DeliveryReviewCard />
      <Footer />
    </main>
  );
};

export default Home;
