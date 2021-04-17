import React from "react";
import "./Header.css";
import logo from "../../images/logo2.png";
import { FaCartPlus } from "react-icons/fa";

const Headar = () => {
  return (
    <header className="position-relative">
      <nav className="navbar navbar-expand-lg w-100 navbar-white bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-dark bg-light rounded-pill font-weight-bold px-4"
                  href="#"
                >
                  <FaCartPlus />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark bg-light rounded-pill font-weight-bold px-4 mx-1"
                  href="#"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light bg-danger rounded-pill font-weight-bold px-4"
                  href="#"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="banner d-flex justify-content-center align-items-center">
        <div className="search-box">
          <h2>Best food waiting for your belly</h2>
          <div className="search-area d-flex bg-white rounded-pill mb-3 mt-4">
            <input
              type="text"
              className="form-control rounded-pill border-0"
              placeholder="Search food items"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-danger rounded-pill px-4">Search</button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Headar;
