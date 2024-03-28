import React from "react";
import Header from "../components/Header";
import Step from "../components/Step";

const Summary = () => {
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
            title={"Finishing up"}
            description={"Double check everything looks OK before confirming."}
          />

          <form action="" className="form">
            <div className="addon-control"></div>

            <div className="button-control">
              <button type="submit" className="button back-button">
                Go Back
              </button>
              <button type="submit" className="button next-button">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </article>
    </>
  );
};

export default Summary;
