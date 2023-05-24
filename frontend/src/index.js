import React from "react";
import * as ReactDom from "react-dom";
import App from "./app";
import { StoreProvider } from "./stateManagement/store";
import SocketService from "./socketService";
import Router from "./router";
import "./style.scss";

ReactDom.render(
  <StoreProvider>
    <Router />
    <SocketService />
  </StoreProvider>,
  document.getElementById("root")
);
