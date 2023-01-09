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
        name: "Boss cookie shop",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }

  function checkPassword() {
    if (password && confirmPassword && password !== confirmPassword) {
      alert("The password doesn't match with each other");
    }
  }

  return (
    <>
      <h1>Shop Register</h1>
      <form
        onSubmit={(e) => {
          handleRegister();
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setName("");
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
        <div
          id="shop-name-input-container"
          className="container flex-column"
          style={{ gap: "10px" }}
        >
          <label htmlFor="shop-name">Shop's Name</label>
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
