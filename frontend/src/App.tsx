import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Chat } from "./pages/Chat";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Register } from "./pages/Register";
import { _404 } from "./pages/_404";
import { Transaction } from "./pages/Transaction";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/profile/:userId/cart" element={<Cart />} />
          <Route path="/profile/:userId/transaction" element={<Transaction />} />
          <Route path="/chat/:userId" element={<Chat />} />
          <Route path="*" element={<_404 />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
