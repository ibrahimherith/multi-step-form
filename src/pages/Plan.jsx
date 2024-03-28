import React from "react";
import Step from "../components/Step";
import Header from "../components/Header";
import "../styles/Plan.css";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";

const Plan = () => {
  return (
    <>
      <article className="card">
        <div className="steps-card">
          <Step number={1} name={"step 1"} description={"Your info"} />
          <Step number={2} name={"step 2"} description={"Select plan"} />
          <Step number={3} name={"step 3"} description={"add-ons"} />
          <Step number={4} name={"step 4"} description={"summary"} />
        </div>
        <div className="form-card">
          <Header
            title={"Select your plan"}
            description={"You have the option of monthly or yearly billing."}
          />

          <form action="" className="form">
            <div>
              <div className="plan-control">
                <div className="plan">
                  <div className="plan-label">
                    <img src={iconArcade} alt="" />
                    <div>
                      <p>Arcade</p>
                      <span>$9/month</span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="plans"
                    id="arcade"
                    className="plan-input"
                  />
                </div>
                <div className="plan">
                  <div className="plan-label">
                    <img src={iconAdvanced} alt="" />
                    <div>
                      <p>Arcade</p>
                      <span>$9/month</span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="plans"
                    id="arcade"
                    className="plan-input"
                  />
                </div>
                <div className="plan">
                  <div className="plan-label">
                    <img src={iconPro} alt="" />
                    <div>
                      <p>Arcade</p>
                      <span>$9/month</span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="plans"
                    id="arcade"
                    className="plan-input"
                  />
                </div>
              </div>
              <div className="plan-toggle">Toggle</div>
            </div>

            <div className="button-control">
              <button type="submit" className="button back-button">
                Go Back
              </button>
              <button type="submit" className="button next-button">
                Next Step
              </button>
            </div>
          </form>
        </div>
      </article>
    </>
  );
};

export default Plan;
