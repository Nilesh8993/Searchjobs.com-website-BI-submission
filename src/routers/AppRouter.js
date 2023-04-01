import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobFeed from "../components/JobFeed";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Engineering from "../components/jobStreams/Engineering";
import Management from "../components/jobStreams/Management";
import Marketing from "../components/jobStreams/Marketing";
import Sales from "../components/jobStreams/Sales";
import ContactForm from "../components/ContactForm";
import Profile from "../components/Profile/Profile";

const AppRouter = () => {
  const [userTag, setUserTag] = useState("");

  return (
    <BrowserRouter>
      <div className="">
        <Navbar userTag={userTag} setUserTag={setUserTag} />

        <Routes>
          <Route
            path="/"
            element={<LoginForm setUserTag={setUserTag} />}
          ></Route>

          <Route
            path="/login"
            element={<LoginForm setUserTag={setUserTag} />}
          ></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/jobs" element={<JobFeed find={""} />}></Route>
          <Route path="/engineering" element={<Engineering />}></Route>
          <Route path="/management" element={<Management />}></Route>
          <Route path="/marketing" element={<Marketing />}></Route>
          <Route path="/sales" element={<Sales />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
