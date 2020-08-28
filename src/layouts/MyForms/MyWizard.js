import React, { useState, useEffect } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

function MyWizard({
  onChange,
  onSubmit,
  loading,
  error,
  formValid,
  form,
  setForm,
}) {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    setForm({});
  }, []);

  switch (step) {
    case 1:
      return (
        <Form1
          form={form}
          formValid={formValid}
          onChange={onChange}
          nextStep={nextStep}
        />
      );

    case 2:
      return (
        <Form2
          form={form}
          onChange={onChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );

    case 3:
      return (
        <Form3
          form={form}
          onChange={onChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );

    case 4:
      return (
        <Form4
          form={form}
          error={error}
          loading={loading}
          onSubmit={onSubmit}
          onChange={onChange}
          prevStep={prevStep}
        />
      );

    default:
      setStep(1);
      return (
        <Form1
          form={form}
          formValid={formValid}
          onChange={onChange}
          nextStep={nextStep}
        />
      );
  }
}

export default MyWizard;
