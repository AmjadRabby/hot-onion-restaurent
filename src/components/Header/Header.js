import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo2.png";
import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase/app";
import { logout } from "../../redux/actions/cartAction";

const Header = ({ cart, auth, setLogOut }) => {
  const [click, setClick] = useState(true);

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLogOut();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <header
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
                    cart.length
                      ? "nav-link  text-white bg-danger rounded-pill font-weight-bold px-4"
                      : "nav-link d-flex justify-content-center align-items-center text-dark bg-light rounded-pill font-weight-bold px-4"
                  }
                >
                  <FaCartPlus className="mr-1" /> {cart.length}
                </Link>
              </li>

              {auth.email ? (
                <li onClick={handleSignOut} className="nav-item">
                  <Link
                    to=""
                    className="nav-link text-dark bg-light rounded-pill font-weight-bold p-1 px-2 mx-1"
                  >
                    <img
                      src={auth.photoURL}
                      alt=""
                      className="profile-img img-fluid rounded-circle mr-1"
                    />
                    <small className="font-weight-bold">
                      {auth.displayName} {}
                    </small>
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link text-dark bg-light rounded-pill font-weight-bold px-4 mx-1"
                  >
                    Login
                  </Link>
                </li>
              )}
              {auth.email ? (
                <li onClick={handleSignOut} className="nav-item">
                  <Link
                    to=""
                    className="nav-link text-white bg-danger rounded-pill font-weight-bold px-4 mx-1"
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link text-light bg-danger rounded-pill font-weight-bold px-4"
                    to="/register"
                  >
                    Sign up
                  </Link>
                </li>
              )}
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
    auth: state.auth,
  };
};
const mapDispatchToProps = {
  setLogOut: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
