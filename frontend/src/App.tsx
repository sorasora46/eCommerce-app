import { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const response = await axios.post(
      "http://localhost:8000/auth/login",
      {
        email: username,
        password: password,
      },
      { withCredentials: true }
    );
    console.log(response);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit();
          e.preventDefault();
        }}
      >
        <label htmlFor="username">email</label>
        <input
          type="email"
          id="username"
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <button
        onClick={async () => {
          const res = await axios.get("http://127.0.0.1:8000/auth/test", {
            withCredentials: true,
          });
          console.log(res);
        }}
      >
        test cookie
      </button>
    </div>
  );
}

export default App;
