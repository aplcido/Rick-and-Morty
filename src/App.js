import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NoMatch } from "./pages/NoMatch";

import "./App.css";

const App = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
    <Route path="*" element={<NoMatch />} />
  </Routes>
);

export default App;
