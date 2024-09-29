import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import Logement from "./Pages/Logement/Logement";
import Test from "./Pages/Test/Test";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/logement/:id" element={<Logement />} />
    <Route path="*" element={<Error />} />
    <Route path="/test" element={<Test />} />
  </Routes>
);

export default AppRouter;
