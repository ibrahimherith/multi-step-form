import React from "react";
import { Link } from "react-router-dom";

const Summary = () => {
  return (
    <section className="form-container">
      <form action="" className="form">
        <div className="form-data">
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
        </div>

        <div className="form-button">
          <div>
            <Link to="/addons" className="cool-gray">
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

export default Summary;
