import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const DeliveryDetails = () => {
  return (
    <main className="">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="details">
              <h4 className="border-bottom">Edit Delivery Details</h4>
              <div className="form">
                <input type="text" className="form-control bg-light border-0" />
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default DeliveryDetails;
