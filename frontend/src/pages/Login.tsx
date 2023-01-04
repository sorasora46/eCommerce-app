import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          axios
            .post(
              "http://127.0.0.1:8000/auth/login",
              { email: email, password: password },
              { withCredentials: true }
            )
            .then((res) => {
              window.location.href = res.data.redirectUrl;
            })
            .catch((err) => console.error(err));
          setEmail("");
          setPassword("");
          e.preventDefault();
        }}
      >
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">login</button>
      </form>
      <button
        onClick={() => {
          axios
            .get("http://127.0.0.1:8000/auth/test", {
              withCredentials: true,
            })
            .then((res) => {
              window.location.href = res.data.redirectUrl;
            })
            .catch((err) => console.error(err));
        }}
      >
        test
      </button>
    </div>
  );
};
