import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Switch from "react-switch";

import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";

const Plan = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [plan, setPlan] = useState([]);

  //function to handle monthly and yearly choices
  const handleChecked = (nextChecked) => {
    setChecked(nextChecked);
  };

  //function to handle user plan choice
  const handlePlanChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;

    setPlan(...plan, { [name]: value });
  };

  //function to handle form submit
  const handleSubmit = () => {
    if (plan.name) {
      console.log(plan.value);

      navigate("/addons");
      setPlan([]);
    }
  };

  return (
    <section className="form-container">
      <form action="" onSubmit={handleSubmit} className="form">
        <div className="form-data">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>

          <div className="plans-container">
            <div className="radio-control">
              <input
                type="radio"
                name="plan"
                id="arcade"
                value={9}
                onChange={handlePlanChange}
              />
              <label htmlFor="arcade">
                <img src={iconArcade} alt="arcade" />
                <div>
                  <span className="plan-name">Arcade</span>
                  {!checked ? (
                    <span className="plan-price">$9/mo</span>
                  ) : (
                    <span className="plan-price">$90/yr</span>
                  )}
                  {!checked ? (
                    ""
                  ) : (
                    <span className="plan-small">2 months free</span>
                  )}
                </div>
              </label>
            </div>
            <div className="radio-control">
              <input
                type="radio"
                name="plan"
                id="advanced"
                value={12}
                onChange={handlePlanChange}
              />
              <label htmlFor="advanced">
                <img src={iconAdvanced} alt="advanced" />
                <div>
                  <span className="plan-name">Advanced</span>
                  {!checked ? (
                    <span className="plan-price">$12/mo</span>
                  ) : (
                    <span className="plan-price">$120/yr</span>
                  )}
                  {!checked ? (
                    ""
                  ) : (
                    <span className="plan-small">2 months free</span>
                  )}
                </div>
              </label>
            </div>
            <div className="radio-control">
              <input
                type="radio"
                name="plan"
                id="pro"
                value={15}
                onChange={handlePlanChange}
              />
              <label htmlFor="pro">
                <img src={iconPro} alt="pro" />
                <div>
                  <span className="plan-name">Pro</span>
                  {!checked ? (
                    <span className="plan-price">$15/mo</span>
                  ) : (
                    <span className="plan-price">$150/yr</span>
                  )}
                  {!checked ? (
                    ""
                  ) : (
                    <span className="plan-small">2 months free</span>
                  )}
                </div>
              </label>
            </div>
          </div>

          <div className="plan-toggle">
            monthly
            <Switch
              onChange={handleChecked}
              checked={checked}
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={48}
              handleDiameter={10}
              offColor="#02295a"
              onColor="#02295a"
              offHandleColor="#fff"
              onHandleColor="#fff"
              className="react-switch"
            />
            yearly
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

export default Plan;
