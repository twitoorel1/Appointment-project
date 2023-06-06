import * as Yup from "yup";

let phoneNumberRegex = "^+?(972|0)(-)?0?(([23489]{1}d{7})|[5]{1}d{8})$";
let passwordRegex = "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/";

// .matches(passwordRegex, "סיסמא לא חוקית"),
// matches(phoneNumberRegex, "מספר טלפון לא חוקי"),
const registerValidationSchema = Yup.object().shape({
  username: Yup.string().required("אימייל זה חובה"),
  firstName: Yup.string().required("שם פרטי זה חובה"),
  lastName: Yup.string().required("שם משפחה זה חובה"),
  password: Yup.string().required("סיסמה זה חובה"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "הסיסמאות חייבות להיות זהות"
  ),
  phoneNumber: Yup.number().required("טלפון זה חובה"),
});

export default registerValidationSchema;
