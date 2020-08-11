import React from "react";
import LoginForm from "../layouts/Login";
import useFormLogin from "../customeHooks/useFormLogin";

const LoginContainer = () => {
  return (
    <div>
      <LoginForm form={useFormLogin()} />
    </div>
  );
};

export default LoginContainer;
