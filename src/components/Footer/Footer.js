import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="mt-5 bg-dark">
      <section className="container pt-5 pb-5">
        <div className="row">
          <div className="col-6">
            <Link to="/">
              <img src={logo} alt="" className="logo" />
            </Link>
          </div>
          <div className="col-3">
            <ul className="list-unstyled">
              <li className="text-white p-1">About Online food</li>
              <li className="text-white p-1">Read our blog</li>
              <li className="text-white p-1">Sign up to deliver</li>
              <li className="text-white p-1">Add your restaurant</li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled">
              <li className="text-white p-1">Get Help</li>
              <li className="text-white p-1">Read FAQS</li>
              <li className="text-white p-1">View all cities</li>
              <li className="text-white p-1">Restaurants near me</li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-7">
            <p className="text-secondary"> Copyright &copy; 2021 Online food</p>
          </div>
          <div className="col-2 text-white">Privacy Policy.</div>
          <div className="col-2 text-white">Terms of Use</div>
          <div className="col-1 text-white">Pricing</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
