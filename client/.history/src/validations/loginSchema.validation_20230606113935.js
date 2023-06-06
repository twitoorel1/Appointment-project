import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("אימייל לא תקין").required("אימייל זה חובה"),
  password: Yup.string()
    .min(6, "הסיסמה חייבת להכיל לפחות 6 תווים")
    .max(20, "הסיסמה יכולה להכיל עד 20 תווים")
    .required("סיסמה זה חובה"),
});

export default loginValidationSchema;
