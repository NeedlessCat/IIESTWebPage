import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Alumini from "./pages/Alumini";
import Faculty from "./pages/Faculty";
import RegistrationForm from "./pages/RegistrationForm";
import FacultyProfile from "./pages/FacultyProfile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/faculty/:department" element={<Faculty />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/faculty-profile/:facId" element={<FacultyProfile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
