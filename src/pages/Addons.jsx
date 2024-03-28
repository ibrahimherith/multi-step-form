import React from "react";
import Header from "../components/Header";
import Step from "../components/Step";
import "../styles/Addons.css";

const Addons = () => {
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
            title={"Pick add-ons"}
            description={"Add-ons help enhance your gaming experience."}
          />

          <form action="" className="form">
            <div className="addon-control">
              <div className="addon">
                <input type="checkbox" name="plans" id="arcade" />
                <div className="addon-label">
                  <div>
                    <p>Online services</p>
                    <span>Access to multiplayer games</span>
                  </div>
                  <span>+$1/mo</span>
                </div>
              </div>

              <div className="addon">
                <input type="checkbox" name="plans" id="arcade" />
                <div className="addon-label">
                  <div>
                    <p>Large storage</p>
                    <span>Extra 1TB of cloud save</span>
                  </div>
                  <span>+$2/mo</span>
                </div>
              </div>
              <div className="addon">
                <input type="checkbox" name="plans" id="arcade" />
                <div className="addon-label">
                  <div>
                    <p>Customizable profile</p>
                    <span>Custome theme on your profile</span>
                  </div>
                  <span>+$2/mo</span>
                </div>
              </div>
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

export default Addons;
