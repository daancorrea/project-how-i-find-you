import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import AllRoutes from "./routes/routes";
import { GlobalStyle } from "./styles/styles";

ReactDOM.render(
  <>
    <AllRoutes />
    <GlobalStyle />
    <ToastContainer theme="colored" autoClose={2000} />
  </>,
  document.getElementById("root")
);
