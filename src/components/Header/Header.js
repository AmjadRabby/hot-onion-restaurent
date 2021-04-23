import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo2.png";
import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
  const [click, setClick] = useState(true);


  return (
    <header
      className="position-relative"
    >
      <nav className="navbar navbar-expand-lg w-100 navbar-white bg-white">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img className="logo" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler bg-danger px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setClick(!click)}
          >
            {click ? (
              <FaBars className="text-light" />
            ) : (
              <FaTimes className="text-light" />
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/cart-review"
                  className={
                    props.cart.length
                      ? "nav-link  text-white bg-danger rounded-pill font-weight-bold px-4"
                      : "nav-link d-flex justify-content-center align-items-center text-dark bg-light rounded-pill font-weight-bold px-4"
                  }
                >
                  <FaCartPlus className="mr-1" /> {props.cart.length}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link text-dark bg-light rounded-pill font-weight-bold px-4 mx-1"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light bg-danger rounded-pill font-weight-bold px-4"
                  to="/login"
                >
                  Sign up
                </Link>
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

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Header);
