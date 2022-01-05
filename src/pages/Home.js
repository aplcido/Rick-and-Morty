import React from "react";
import { Data } from "../components/Data";
import { Routes, Route, Link } from "react-router-dom";

import CustomNavbar from "../components/CustomNavbar";

const Home = () => (
  <>
    <CustomNavbar />
    <Data />
    <p>Home </p>
  </>
);

export { Home };
