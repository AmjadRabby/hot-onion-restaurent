import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import mapImg from "../../images/ordercomplete.png";
import rideLogo from "../../images/image/rideLogo.png";
import { connect } from "react-redux";

const OrderComplete = (props) => {
  const { auth } = props;
  return (
    <main className="">
      <Header />
      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={mapImg} alt="" className="img-fluid" />
          </div>

          <div className="col-md-4 bg-light rounded ml-5">
            <img src={rideLogo} alt="" className="img-fluid ml-5 w-25" />
            <div className="bg-white rounded p-2 mb-3 mt-3">
              <h5 className="">Your Location</h5>
              <p className="text-muted mb-1">107 Rd No 8</p>
              <h5 className="">Shop Address</h5>
              <p className="text-muted mb-1">Gulshan Plaza Restaura GPR</p>
            </div>
            <h2 className="">09:30</h2>
            <p className="text-muted">Estimated delivery time</p>
            <div className="bg-white rounded d-flex mb-3 p-2 ">
              <img
                src={auth.photoURL}
                alt=""
                className="profile-img img-fluid rounded-circle mr-2"
              />
              <div className="">
                <small className="font-weight-bold d-block">
                  {auth.displayName} {}
                </small>
                <small className="text-muted">Your raider</small>
              </div>
            </div>
            <button
              onClick={() => alert("Thank u order your favorite food")}
              className="btn btn-danger rounded w-100"
            >
              Contact
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(OrderComplete);
