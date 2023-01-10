import axios from "axios";
import { FC, useState } from "react";
import { Button } from "../Button";
import { Textfield } from "../Textfield";

export const ShopRegisterForm: FC<{}> = ({}) => {
  const role = "SHOP";
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  function handleRegister() {
    axios
      .post("http://127.0.0.1:8000/user/register", {
        email: email,
        password: password,
        role: role,
        name: name,
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

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Shop Register</h2>
      <form
        onSubmit={(e) => {
          handleRegister();
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setName("");
          e.preventDefault();
        }}
        className="container flex-column center-items"
        style={{
          marginBottom: "20rem",
          textAlign: "center",
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
        <div
          id="shop-name-input-container"
          className="container flex-column center-items"
          style={{ marginBottom: "1rem" }}
        >
          <label htmlFor="shop-name">
            <h3>Shop's Name</h3>
          </label>
          <Textfield
            placeholder="Shop's Name"
            type="text"
            value={name}
            onChange={setName}
            isRequired={true}
            id="shop-name"
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
