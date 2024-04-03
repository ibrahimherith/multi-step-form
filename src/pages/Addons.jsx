import React from "react";
import { Link } from "react-router-dom";

const Addons = () => {
  return (
    <section className="form-container">
      <form action="" className="form">
        <div className="form-data">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>

          <div className="addons-container">
            <div className="checkbox-control">
              <input type="checkbox" name="plans" id="service" />
              <label htmlFor="service">
                <div>
                  <h3>Online services</h3>
                  <p>Access to multiplayer games</p>
                </div>
                <div className="add-price">+$1/mo</div>
              </label>
            </div>
            <div className="checkbox-control">
              <input type="checkbox" name="plans" id="arcade" />
              <label htmlFor="">
                <div>
                  <h3>Large storage</h3>
                  <p>Extra 1TB of cloud save</p>
                </div>
                <div className="add-price">+$2/mo</div>
              </label>
            </div>
            <div className="checkbox-control">
              <input type="checkbox" name="plans" id="arcade" />
              <label htmlFor="">
                <div>
                  <h3>Customizable profile</h3>
                  <p>Custome theme on your profile</p>
                </div>
                <div className="add-price">+$2/mo</div>
              </label>
            </div>
          </div>
        </div>

        <div className="form-button">
          <div>
            <Link to="/" className="cool-gray">
              Go Back
            </Link>
          </div>
          <button type="submit" className="submit-btn">
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
};

export default Addons;
