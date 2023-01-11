import axios from "axios";
import { FC, useState } from "react";
import { Button } from "../Button";
import { Textfield } from "../Textfield";

export const CustomerRegisterForm: FC<{}> = ({}) => {
  const role = "CUSTOMER";
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>(findMaxDate());

  function handleRegister() {
    axios
      .post("http://127.0.0.1:8000/user/register", {
        email: email,
        password: password,
        role: role,
        name: {
          fname: fname,
          lname: lname,
        },
        dateOfBirth: dateOfBirth,
      })
      .then((res) => {
        alert("Registeration Success!");
        window.location.href = "http://127.0.0.1:5173/login";
      })
      .catch((err) => console.error(err));
  }

  function checkPassword() {
    if (password && confirmPassword && password !== confirmPassword) {
      alert("The password doesn't match with each other");
    }
  }

  function findMaxDate() {
    const maxYear = new Date().getFullYear() - 16;
    const maxDate = new Date(new Date().setFullYear(maxYear));
    return maxDate.toISOString().split("T")[0];
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Customer Register</h2>
      <form
        onSubmit={(e) => {
          handleRegister();
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setFname("");
          setLname("");
          e.preventDefault();
        }}
        className="container flex-column"
        style={{
          marginBottom: "20rem",
          textAlign: "center",
          height: "50vh",
          width: "100%",
        }}
      >
        <div
          id="email-input-container"
          className="container flex-column center-items"
          style={{ marginBottom: "1rem" }}
        >
          <label htmlFor="email">
            <h3>Email</h3>
          </label>
          <Textfield
            placeholder="Email"
            type="email"
            value={email}
            onChange={setEmail}
            isRequired={true}
            id="email"
          />
        </div>
        <div
          id="password-input-container"
          className="container flex-column center-items"
          style={{ marginBottom: "1rem" }}
        >
          <label htmlFor="password">
            <h3>Password</h3>
          </label>
          <Textfield
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPassword}
            isRequired={true}
            id="password"
          />
        </div>
        <div
          id="confirm-password-input-container"
          className="container flex-column center-items"
          style={{ marginBottom: "1rem" }}
        >
          <label htmlFor="confirm-password">
            <h3>Confirm Password</h3>
          </label>
          <Textfield
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            isRequired={true}
            onBlur={checkPassword}
            id="confirm-password"
          />
        </div>
        <div id="name-container">
          <div
            id="fname-input-container"
            className="container flex-column center-items"
            style={{ marginBottom: "1rem" }}
          >
            <label htmlFor="fname">
              <h3>Firstname</h3>
            </label>
            <Textfield
              placeholder="Firstname"
              type="text"
              value={fname}
              onChange={setFname}
              isRequired={true}
              id="fname"
            />
          </div>
          <div
            id="lname-input-container"
            className="container flex-column center-items"
            style={{ marginBottom: "1rem" }}
          >
            <label htmlFor="lname">
              <h3>Lastname</h3>
            </label>
            <Textfield
              placeholder="Lastname"
              type="text"
              value={lname}
              onChange={setLname}
              isRequired={true}
              id="lname"
            />
          </div>
        </div>
        <div
          id="date-input-container"
          className="container flex-column center-items"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <label htmlFor="birthdate">
            <h3>Date of Birth</h3>
          </label>
          <input
            type="date"
            id="birthdate"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            max={findMaxDate()}
            style={{ display: "block", width: "15rem" }}
          />
        </div>
        <div
          id="login-register-buttons"
          className="container flex-row center-items"
        >
          <Button
            type="submit"
            className="custom-button"
            style={{ marginTop: "20px" }}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};