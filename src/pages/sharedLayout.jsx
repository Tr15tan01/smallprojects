import { Outlet } from "react-router-dom";
import { NavBar } from "../components";
export const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
