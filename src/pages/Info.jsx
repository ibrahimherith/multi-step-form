import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  //function to handle input changes
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  //function to handle user data submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    if (user.name && user.email && user.phone) {
      console.log(user.name, user.email, user.phone);

      //putting data into an array
      const newUser = { ...user, id: new Date().getDate().toString() };
      setData(...data, newUser);

      //navigating to next page
      navigate("/plan");
      setUser({ name: "", email: "", phone: "" });
    } else {
      if (!user.name) {
        nameInput.style.borderColor = "#ed3548";
        nameInput.previousElementSibling.children[1].textContent =
          "This field is required";
      }
      if (!user.email) {
        emailInput.style.borderColor = "#ed3548";
        emailInput.previousElementSibling.children[1].textContent =
          "This field is required";
      }
      if (!user.phone) {
        phoneInput.style.borderColor = "#ed3548";
        phoneInput.previousElementSibling.children[1].textContent =
          "This field is required";
      }

      console.log("Invalid inputs");
    }
  };

  return (
    <section className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-data">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address and phone number.</p>

          <div className="input-control">
            <label htmlFor="name">
              <span>Name</span>
              <span>&nbsp;</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Stephen King"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-control">
            <label htmlFor="name">
              <span>Email address</span>
              <span>&nbsp;</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-control">
            <label htmlFor="name">
              <span>Phone number</span>
              <span>&nbsp;</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              value={user.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-button">
          <div>{/** For aligning the button to the right */}</div>
          <button type="submit" className="submit-btn">
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
};

export default Info;
