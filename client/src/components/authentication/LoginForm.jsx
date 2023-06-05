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
import loginValidationSchema from "@/validations/loginSchema.validation";
import { useDispatch, useSelector } from "react-redux";
import { loginByPayload } from "@/redux/slices/authenticationSlice";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const onSubmitLogin = async (data) => {
    dispatch(loginByPayload(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)}>
      <h2 className="text-2xl lg:text-3xl text-center my-10">
        <span className="font-bold">התחברות</span>
      </h2>
      <Input
        id="loginEmailInput"
        type="email"
        placeholder="אימייל"
        register={{ ...register("email") }}
      />
      {errors.email && <span className="mx-5">{errors.email.message}</span>}

      <Input
        id="loginPasswordInput"
        type="password"
        placeholder="סיסמה"
        register={{ ...register("password") }}
      />
      {errors.password && (
        <span className="mx-5">{errors.password.message}</span>
      )}

      {/* <div className="my-5">
        <Link href={"/"} className="my-5" label="שכחת את הסיסמה?" />
      </div> */}
      <Button label="התחבר" />
      {error && <span className="mx-5">{error}</span>}
    </form>
  );
};

export default LoginForm;
