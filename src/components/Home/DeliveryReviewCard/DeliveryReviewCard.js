import React, { useState } from "react";
import { DeliveryData } from "../../../fakeData/Data";
import { FaBusAlt, FaArrowCircleRight } from "react-icons/fa";

const DeliveryReviewCard = () => {
  const [delivery] = useState(DeliveryData);
  return (
    <section className="container mt-5 mb-5">
      <div>
        <h2 className="text-dark">Why you choose us</h2>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Perspiciatis, architecto! <br /> Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Aliquam, modi.{" "}
        </p>
      </div>
      <div className="row mt-5">
        {delivery.map((item) => (
          <div key={item.id} className="col-4 col-md-4 col-sm-12">
            <div className="card card-item rounded border-0 mb-3">
              <img
                src={item.image}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body px-5 p-0 mt-4">
                <div className="card-icon-title d-flex">
                  <div className="d-flex justify-content-center align-items-center text-white bg-danger rounded-circle card-icon mr-2">
                    <FaBusAlt className="" />
                  </div>

                  <h6 className="card-title ">{item.title}</h6>
                </div>
                <p className="card-text text-secondary">{item.description}</p>

                <p className="btn btn-outline-primary border-0">
                  See More <FaArrowCircleRight className="ml-3" />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliveryReviewCard;
