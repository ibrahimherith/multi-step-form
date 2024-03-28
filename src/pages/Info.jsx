import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Info.css";
import Step from "../components/Step";
import Input from "../components/Input";
import Header from "../components/Header";

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

    if (user.name && user.email && user.phone) {
      console.log(user.name, user.email, user.phone);

      //putting data into an array
      const newUser = { ...user, id: new Date().getDate().toString() };
      setData(...data, newUser);

      //navigating to next page
      navigate("/plan");
      setUser({ name: "", email: "", phone: "" });
    } else {
      console.log("Invalid inputs");
    }
  };

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
            title="Personal Info"
            description="Please provide your name, email address and phone number."
          />
          <form action="" className="form" onSubmit={handleSubmit}>
            <Input
              label="Name"
              type="text"
              name="name"
              placeholder="e.g. Stephen King"
              value={user.name}
              onChange={handleChange}
              required="required"
            />
            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
              value={user.email}
              onChange={handleChange}
              required="required"
            />
            <Input
              label="Phone Number"
              type="phone"
              name="phone"
              placeholder="e.g. +1 234 567 890"
              value={user.phone}
              onChange={handleChange}
              required="required"
            />

            <div className="button-control">
              <div>{/** For aligning the button to the right */}</div>
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

export default Info;
