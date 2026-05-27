import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import User from "./pages/User";

function Layout() {
  const location = useLocation();

  // Hide Navbar on Login Page
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/login" element={<Login />} />

        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
