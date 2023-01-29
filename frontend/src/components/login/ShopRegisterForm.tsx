import axios from "axios";
import { FC, useState } from "react";
import { accentColor } from "../../resources/colors";
import { Button } from "../Button";
import { Textfield } from "../Textfield";
import { MdEmail, MdPassword, MdEdit, MdImage } from "react-icons/md";

export const ShopRegisterForm: FC<{}> = ({}) => {
  const role = "SHOP";
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [file, setFile] = useState<any>(null);
  const [fileName, setFileName] = useState<string>("");

  function handleRegister() {
    if (!file) {
      alert("Profile picture is missing!");
      return;
    }

    const formData = new FormData();
    formData.append("profileImage", file);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("role", role);
    formData.set("name", name);

    axios
      .post("http://127.0.0.1:8000/user/register", formData)
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
            <h3>
              Email <MdEmail />
            </h3>
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
            <h3>
              Password <MdPassword />
            </h3>
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
            <h3>
              Confirm Password <MdPassword />
            </h3>
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
            <h3>
              Shop's Name <MdEdit />
            </h3>
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
          id="image-input-container"
          className="container flex-column center-items"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <label htmlFor="img-file" className="file-input">
            Choose an image <MdImage />
          </label>
          <input
            id="img-file"
            style={{ visibility: "hidden" }}
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files?.[0]);
              setFileName(e.target.files?.[0].name || "");
            }}
          />
          <p style={{ color: `${accentColor}` }}>{fileName || ""}</p>
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
