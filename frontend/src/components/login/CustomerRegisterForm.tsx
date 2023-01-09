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
      .then((res) => console.log(res.data))
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
    <>
      <h1>Customer Register</h1>
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
          gap: "20px",
          textAlign: "center",
        }}
      >
        <div
          id="email-input-container"
          className="container flex-column"
          style={{ gap: "10px" }}
        >
          <label htmlFor="email">Email</label>
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
          className="container flex-column"
          style={{ gap: "10px" }}
        >
          <label htmlFor="password">Password</label>
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
          className="container flex-column"
          style={{ gap: "10px" }}
        >
          <label htmlFor="confirm-password">Confirm Password</label>
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
            className="container flex-column"
            style={{ gap: "10px" }}
          >
            <label htmlFor="fname">Firstname</label>
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
            className="container flex-column"
            style={{ gap: "10px" }}
          >
            <label htmlFor="lname">Lastname</label>
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
          className="container flex-column"
          style={{ gap: "10px" }}
        >
          <label htmlFor="birthdate">Date of Birth</label>
          <input
            type="date"
            id="birthdate"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            max={findMaxDate()}
          />
        </div>
        <div
          id="login-register-buttons"
          className="container flex-row center-items"
          style={{ gap: "3rem", marginTop: "20px" }}
        >
          <Button type="submit" className="custom-button">
            Register
          </Button>
        </div>
      </form>
    </>
  );
};
