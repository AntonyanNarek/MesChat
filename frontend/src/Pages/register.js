import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosHandler, errorHandler } from "../helper";
import { AuthForm, loginRequest } from "./login";
import { REGISTER_URL } from "../urls";

const Register = (props) => {
  const [registerData, setRegisterData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await axiosHandler({
      method: "post",
      url: REGISTER_URL,
      data: registerData,
    }).catch((e) => setError(errorHandler(e)));
    if (result) {
      await loginRequest(registerData, setError, navigate);
    }
    setLoading(false);
  };

  const onChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="loginContainer">
      <div className="inner">
        <div className="logo">MESCHAT</div>
        <div className="title">Регистрация</div>
        <AuthForm
          data={registerData}
          onSubmit={submit}
          showPassword={showPassword}
          onChange={onChange}
          error={error}
          setError={setError}
          setShowPassword={setShowPassword}
        ></AuthForm>
        <div className="switchOption">
          Уже есть аккаунт? <Link to="/login">Авторизоваться</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
