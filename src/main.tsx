import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "../src/style";
import { GlobalStyle } from "../src/style";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { PrimeReactProvider } from "primereact/api";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
