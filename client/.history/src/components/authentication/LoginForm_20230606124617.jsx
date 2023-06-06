import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
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

  const [showForm, setShowForm] = useState(false);

  const onSubmitLogin = async (data) => {
    dispatch(loginByPayload(data));
  };

  useEffect(() => {
    setShowForm(true);
  }, []);

  return (
    <div className="relative">
      <Transition in={showForm} timeout={750} mountOnEnter unmountOnExit>
        {(state) => (
          <form
            onSubmit={handleSubmit(onSubmitLogin)}
            className={`${
              state === "entered" ? "scale-100" : "scale-0"
            } transition-transform duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1E1F1F] p-5 rounded-md shadow-sm w-[85vw] h-[45vw] flex flex-col items-center`}
          >
            <h2 className="text-[#42a5f5] font-bold text-2xl text-center my-10">
              בואינג <span className="text-[#ffffff]">הון אנושי בע"מ</span>
            </h2>

            <div className=" w-[20rem]">
              <Input
                label="אימייל"
                showLabel
                labelClassName={"text-white text-2xl"}

                variant="underline"
                id="loginEmailInput"
                type="email"
                placeholder="אימייל"
                register={{ ...register("email") }}
              />
              {errors.email && (
                <span className="mx-5 text-[red]">{errors.email.message}</span>
              )}

              <Input
                label="סיסמה"
                showLabel
                labelClassName={"text-white text-2xl"}
                inputClassName={"w-[20rem]"}
                variant="underline"
                id="loginPasswordInput"
                type="password"
                placeholder="סיסמה"
                register={{ ...register("password") }}
              />
              {errors.password && (
                <span className="mx-5 text-[red]">
                  {errors.password.message}
                </span>
              )}

              <Button type="submit" variant="primary" className={`border-`}>
                התחבר
              </Button>
              {error && <span className="mx-5 text-[red]">{error}</span>}
            </div>
          </form>
        )}
      </Transition>
    </div>
  );
};

export default LoginForm;
