import React, { useEffect, useState, useContext } from "react";
import Loader from "../components/loader";
import { axiosHandler, getToken, LastUserChat } from "../helper";
import { LOGOUT_URL } from "../urls";

export const tokenName = "tokenName";

export const logout = (props) => {
  if (localStorage.getItem(tokenName)) {
    axiosHandler({
      method: "get",
      url: LOGOUT_URL,
      token: getToken(),
    });
  }
  localStorage.removeItem(tokenName);
  localStorage.removeItem(LastUserChat);
  window.location.href = "/login";
};

const AuthController = (props) => {
  const [checking, setChecking] = useState(true);

  const checkAuthState = () => {
    const token = localStorage.getItem(tokenName);
    if (!token) {
      props.history.push("/login");
      return;
    }
  };
  useEffect(() => {
    checkAuthState();
  }, []);

  return (
    <div className="authContainer">
      {checking ? (
        <div className="centerAll">
          <Loader />
        </div>
      ) : (
        props.children
      )}
    </div>
  );
};

export default AuthController;
