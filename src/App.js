import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Layout from "./pages/Layout";
import Details from "./pages/Details";

import "./App.css";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="details/:id" element={<Details />} />
      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default App;
