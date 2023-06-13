import React from "react";
import { StoreProvider } from "./stateManagement/store";
import Router from "./router";
import "./style.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StoreProvider>
      <Router/>
    </StoreProvider>
  </StrictMode>
);
