import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages//Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import User from "./pages/User/User";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
        <Route path='/user/:id' element={<User />} />
      </Routes>
    </>
  );
}

export default App;
