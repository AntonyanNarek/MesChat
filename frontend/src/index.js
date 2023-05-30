import React from "react";
import * as ReactDom from "react-dom";
import App from "./app";
import { StoreProvider } from "./stateManagement/store";
import SocketService from "./socketService";
import Router from "./router";
import "./style.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StoreProvider>
      <Router />
      <SocketService />
    </StoreProvider>
  </StrictMode>
);
