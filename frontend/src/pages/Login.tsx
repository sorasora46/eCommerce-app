import { useState } from "react";
import axios from "axios";
import { CartSVG } from "../components/CartSVG";
import { Container } from "../components/Container";
import { Ellipse } from "../components/Ellipse";
import { Textfield } from "../components/Textfield";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    axios
      .post(
        "http://127.0.0.1:8000/auth/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        window.location.href = res.data.redirectUrl;
      })
      .catch((err) => {
        console.error(err);
        alert("Cannot login, Try again");
      });
  }

  return (
    <Container
      width={"100%"}
      height={"100vh"}
      className="flex-column"
      style={{ alignItems: "center", marginTop: "8rem", gap: "5rem" }}
    >
      <div id="login-logo">
        <Link
          to="/" /** Don't forget to check authentication for protected route */
        >
          <Ellipse radius={167} borderSize={4}>
            <CartSVG />
          </Ellipse>
        </Link>
      </div>
      <form
        onSubmit={(e) => {
          handleLogin();
          e.preventDefault();
          setEmail("");
          setPassword("");
        }}
        id="username-password"
        className="container flex-column"
        style={{ gap: "3rem", alignItems: "center" }}
      >
        <Textfield
          placeholder="Email"
          type="email"
          value={email}
          onChange={setEmail}
          isRequired={true}
        />
        <Textfield
          placeholder="Password"
          type="password"
          value={password}
          onChange={setPassword}
          isRequired={true}
        />
        <div
          id="login-register-buttons"
          className="container flex-row"
          style={{ gap: "3rem", marginTop: "20px" }}
        >
          <Button className="custom-button" type="submit">
            Login
          </Button>
          <Link to="/register">
            <Button className="custom-button">Register</Button>
          </Link>
        </div>
      </form>
    </Container>
  );
};
