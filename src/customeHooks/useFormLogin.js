import { useState, useContext } from "react";
import { GlobalContext } from "../context/Provider";
import { login } from "../context/actions/login";

export default () => {
  const [form, setForm] = useState({});
  const { authDispatch } = useContext(GlobalContext);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    login(form)(authDispatch);
  };

  const emailValid = form.email ? form.email.length : null;
  const passwordValid = form.password ? form.password.length : null;
  const loginFormValid = emailValid && passwordValid;
  return { form, onChange, loginFormValid, onSubmit };
};
