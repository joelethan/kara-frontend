import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/Provider";
import { login } from "../context/actions/login";
import { useHistory } from "react-router-dom";
import hasToken from "../utils/hasToken";

export default () => {
  const [form, setForm] = useState({});
  const history = useHistory();
  const {
    authDispatch,
    authState: {
      auth: { loading, data, error },
    },
  } = useContext(GlobalContext);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    login(form)(authDispatch);
  };

  useEffect(() => {
    if (data && hasToken()) {
      if (data.token) {
        history.push("/home");
      }
    }
  }, [data]);

  const emailValid = form.email ? form.email.length : null;
  const passwordValid = form.password ? form.password.length : null;
  const loginFormValid = emailValid && passwordValid;
  return { form, onChange, loginFormValid, onSubmit, loading, data, error };
};
