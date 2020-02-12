import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Repair from "./components/Repair";


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/" />
  },
  {
    path: "/repair",
    layout: DefaultLayout,
    component: Repair
  }
  
];
