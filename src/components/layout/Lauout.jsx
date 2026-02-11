import React from "react";
import { Outlet } from "react-router-dom";
import Links from "../links/Links";
import Themes from "../links/Themes";

export default function Lauout() {
  return (
    <>
      <Themes />
      <Links />
      <Outlet />
    </>
  );
}
