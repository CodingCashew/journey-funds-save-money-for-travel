import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAccountContext } from "../context/AccountContext";

const initialValues = {
  email: "",
  password: "",
  repeatPassword: "",
};

function Signup() {
  const [credentials, setCredentials] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setCredentials({
      ...credentials,
      [id]: value,
    });
  };

  const { updateIsLoggedIn, updateUser } = useAccountContext();

  const submitCredentials = async () => {
    if (credentials.password !== credentials.repeatPassword) {
      alert("Passwords do not match.");
      return;
    }

    fetch("/signup", {
      method: "POST",
      body: JSON.stringify({
        email: credentials.email.toLowerCase(),
        password: credentials.password,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Cannot find user") {
          throw new Error();
        }

        updateUser({
          email: data.email,
          password: "xxxxxxx",
        });
        setCredentials(initialValues);
        updateIsLoggedIn(true);
        navigate("/");
      })
      .catch((err: any) => {
        alert("Incorrect username or password.");
        console.error("error: ", err);
      });
  };

  return (
    <div>
      <h1 className="my-4">Sign Up</h1>
      <div className="d-flex-column">
        <div className="d-flex-column flex-wrap">
          <div className="d-flex flex-fill  my-3 col-md-6 mx-auto align-items-center">
            <label className="form-label col-3">Email</label>
            <input
              className="form-control"
              type="text"
              placeholder="email"
              id="email"
              aria-label="email"
              onChange={handleChange}
            ></input>
          </div>
          <div className="d-flex flex-fill a my-3 col-md-6 mx-auto align-items-center">
            <label className="form-label col-3">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="password"
              id="password"
              aria-label="password"
              onChange={handleChange}
            ></input>
          </div>
          <div className="d-flex flex-fill a my-3 col-md-6 mx-auto align-items-center">
            <label className="form-label col-3">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="repeat password"
              id="repeatPassword"
              aria-label="repeat password"
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-success"
            onClick={submitCredentials}
          >
            Sign up
          </button>
        </div>
        <div className="d-flex mt-4 justify-content-center">
          <p className="my-auto mx-2">Already have an account?</p>
          <a href="/signup">
            <button type="button" className="btn btn-light my-auto mx-2">
              Log in
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
