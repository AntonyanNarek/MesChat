import React, { useState, useEffect } from "react";
import eyeopen from "../assets/eyeopen.png";
import eyeclose from "../assets/eyeclose.png";
import { Link } from "react-router-dom";
import google from "../assets/google.png";
import twitter from "../assets/twitter.png";

const Login = (props) => {
  return (
    <div className="loginContainer">
      <div className="inner">
        <div className="logo">MESCHAT</div>
        <div className="title">Вход</div>
        <AuthForm></AuthForm>

        <div className="grid grid-2 grid-gap-2">
          <div className="socialButton">
            <img src={twitter} /> <span>Twitter</span>
          </div>
          <div className="socialButton">
            <img src={google} /> <span>Google</span>
          </div>
        </div>
        <div className="switchOption">
          Не имеете аккаунта? <Link to="/register">Регистрация</Link>
        </div>
      </div>
    </div>
  );
};

export const AuthForm = (props) => {
  return (
    <form>
      <input className="input-field" placeholder="Логин"></input>
      <div className="input-container">
        <input
          className="input-field"
          placeholder="Пароль"
          type="password"
          autoComplete="new-password"
        ></input>
        <img src={eyeopen} />
        <img src={eyeclose} />
      </div>
      {props.login && (
        <div className="flex justify-end">
          <Link to="/">Забыли пароль</Link>
        </div>
      )}
      <button type="submit">Вход</button>
    </form>
  );
};

export default Login;
