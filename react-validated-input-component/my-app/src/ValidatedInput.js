import React, { useState } from "react";


export default function ValidatedInput() {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);

    if (inputValue === "") {
      setIsValid(false);
    } else if (inputValue.length < 8) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };


  return (
    <div className="container-fluid py-4 rounded bg-light w-50">
          <div className="row justify-content-center py-4 px-5 form-group text-body">
            <label htmlFor="password">Password:</label>
            <div className="input-group">
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handleInputChange}
                className={
                  password === "" || password.length < 8
                    ? "form-control is-invalid"
                    : "form-control is-valid"
                }
              />
              {password === "" && (
                <div className="invalid-feedback">
                  A password is required
                </div>
              )}
              {password !== "" && password.length < 8 && (
                <div className="invalid-feedback justify-content-center mr-3">
                  Password must be at least 8 characters long
                </div>
              )}
              {isValid && (
                <div className="valid-feedback">Looks good!</div>

              )}
            </div>
          </div>
        </div>
  );
};
