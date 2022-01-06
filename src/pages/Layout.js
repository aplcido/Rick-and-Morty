import * as React from "react";
import { Outlet } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";

function Layout() {
  return (
    <>
      <CustomNavbar />

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </>
  );
}

export default Layout;
