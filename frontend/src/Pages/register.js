import React from "react";
import { Link } from "react-router-dom";
import { AuthForm } from "./login";

const Register = (props) => {
  return (
    <div className="loginContainer">
      <div className="inner">
        <div className="logo">MESCHAT</div>
        <div className="title">Регистрация</div>
        <AuthForm />
        <div className="switchOption">
          Уже есть аккаунт? <Link to="/login">Вход</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
