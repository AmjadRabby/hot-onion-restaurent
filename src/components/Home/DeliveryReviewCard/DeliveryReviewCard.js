import React, { useState } from 'react';
import { DeliveryData } from '../../../fakeData/Data';

const DeliveryReviewCard = () => {
    const [delivery, setdelivery] = useState(DeliveryData);
    return (
      <section className="container mt-5">
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
            <div className="col-4">
              <div className="card rounded border-0 mb-3">
                <img
                  src={item.image}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title">{item.title}</h6>
                  <p className="card-text text-secondary">{item.description}</p>

                  <p className="text-primary">See More</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default DeliveryReviewCard;