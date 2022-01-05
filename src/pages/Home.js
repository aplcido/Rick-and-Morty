import React from "react";
import { UseDataFetch } from "../hooks/UseDataFetch";
import { Routes, Route, Link } from "react-router-dom";

import CustomNavbar from "../components/CustomNavbar";

const Home = () => (
  <>
    <CustomNavbar />
    <UseDataFetch />
    <p>Home </p>
  </>
);

export { Home };
