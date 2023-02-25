import "./Form.css";
import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    city: "",
    type: "",
    check: false,
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <>
      <div className="container">
        <div className="title">Registration Form</div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <div className="input-box">
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={input.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={input.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-container">
            <div className="input-box">
              <label for="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={input.city}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              {" "}
              <label for="type">Type</label>
              <select
                id="type"
                name="type"
                value={input.type}
                onChange={handleChange}
              >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
              </select>
            </div>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="check"
              name="check"
              checked={input.check}
              onChange={handleChange}
            />
            <label for="check" className="check">
              Check me out
            </label>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <section className="output">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>City</th>
              <th>Type</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{input.email}</td>
              <td>{input.password}</td>
              <td>{input.city}</td>
              <td>{input.type}</td>
              <td>{input.check ? "Checked" : "Unchecked"}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Form;
