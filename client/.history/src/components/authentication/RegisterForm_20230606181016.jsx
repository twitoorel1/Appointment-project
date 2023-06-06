import React from "react";
import {
  Link,
  Input,
  Button,
  AppLogo,
  Loader,
  SeparatorWrapper,
  SkeletonLoader,
  Tooltip,
} from "../common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerValidationSchema from "@/validations/registerSchema.validation";
import { useDispatch } from "react-redux";
import { registerByPayload } from "@/redux/slices/authenticationSlice";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const dispatch = useDispatch();

  const onSubmitRegister = async (data) => {
    dispatch(registerByPayload(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmitRegister)}>
      <h2 className="text-2xl lg:text-3xl text-center my-10">
        <span className="font-bold text-white">הרשמה</span>
      </h2>
      <Input
        id="registerUsernameInput"
        type="text"
        placeholder="שם משתמש"
        register={{ ...register("username") }}
      />
      {errors.username && <span className="mx-5">{errors.username.message}</span>}

      <Input
        id="registerFirstNameInput"
        type="text"
        placeholder="שם פרטי"
        register={{ ...register("firstName") }}
      />
      {errors.firstName && (
        <span className="mx-5">{errors.firstName.message}</span>
      )}

      <Input
        id="registerLastNameInput"
        type="text"
        placeholder="שם משפחה"
        register={{ ...register("lastName") }}
      />
      {errors.lastName && (
        <span className="mx-5">{errors.lastName.message}</span>
      )}

      <Input
        id="registerPhoneNumberInput"
        type="number"
        placeholder="מספר טלפון"
        register={{ ...register("phoneNumber") }}
      />
      {errors.phoneNumber && (
        <span className="mx-5">{errors.phoneNumber.message}</span>
      )}

      <Input
        id="registerPasswordInput"
        type="password"
        placeholder="סיסמה"
        register={{ ...register("password") }}
      />
      {errors.password && (
        <span className="mx-5">{errors.password.message}</span>
      )}

      <Input
        id="registerConfirmPasswordInput"
        type="password"
        placeholder="אימות סיסמה"
        register={{ ...register("confirmPassword") }}
      />
      {errors.confirmPassword && (
        <span className="mx-5">{errors.confirmPassword.message}</span>
      )}

      <Button label="הירשם" />
    </form>
  );
};

export default RegisterForm;
