import React, { useState, useEffect } from "react";
import eyeopen from "../assets/eyeopen.png";
import eyeclose from "../assets/eyeclose.png";
import google from "../assets/google.png";
import twitter from "../assets/twitter.png";
import closeWhite from "../assets/close-white.png";
import { Link } from "react-router-dom";
import { axiosHandler, errorHandler } from "../helper";
import { LOGIN_URL } from "../urls";
import Loader from "../components/loader";
import { tokenName } from "./authController";

export const loginRequest = async (data, setError, props) => {
  const result = await axiosHandler({
    method: "post",
    url: LOGIN_URL,
    data: data,
  }).catch((e) => setError(errorHandler(e)));
  if (result) {
    localStorage.setItem(tokenName, JSON.stringify(result.data));
    props.history.push("/");
  }
};

const Login = (props) => {
  const [loginData, setLoginData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    await loginRequest(loginData, setError, props);
    setLoading(false);
  };

  const onChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="loginContainer">
      <div className="inner">
        <div className="logo">MESCHAT</div>
        <div className="title">Вход</div>
        <AuthForm
          data={loginData}
          onSubmit={submit}
          showPassword={showPassword}
          error={error}
          setError={setError}
          setShowPassword={setShowPassword}
        ></AuthForm>

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
    <>
      {props.error && (
        <div className="errorHolder">
          <div dangerouslySetInnerHTML={{ __html: props.error }} />
          <img src={closeWhite} onClick={() => props.setError(null)} />
        </div>
      )}
      <form onSubmit={props.onSubmit}>
        <input
          value={props.data.username}
          name="username"
          onChange={props.onChange}
          className="input-field"
          placeholder="Логин"
        ></input>
        <div className="input-container">
          <input
            name="password"
            value={props.data.password}
            onChange={props.onChange}
            className="input-field"
            placeholder="Пароль"
            type={!props.showPassword ? "password" : "text"}
            autoComplete="new-password"
            required
          ></input>
          <img
            src={!props.showPassword ? eyeopen : eyeclose}
            onClick={() => props.setShowPassword(!props.showPassword)}
          />
        </div>
        {props.login && (
          <div className="flex justify-end">
            <Link to="/">Забыли пароль</Link>
          </div>
        )}
        <button type="submit" disabled={props.loading}>
          {props.loading ? (
            <center>
              <Loader />
            </center>
          ) : props.login ? (
            "Войти"
          ) : (
            "Зарегистрироваться"
          )}
        </button>
      </form>
    </>
  );
};

export default Login;
