import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatches, useNavigation, useSelectors } from ".";
import { errorMessage } from "../assets/themes/styles";

const useFormAdminActions = () => {
  const { startLoading, dispatchAdmin } = useDispatches();
  const { page } = useSelectors();
  const { navigate } = useNavigation();

  const signUpPath = "/admin/sign-up-admin";
  const signInPath = "/admin/sign-in-admin";

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Incorrect type of email"
      )
      .required("Field is required"),
    password: Yup.string().required("Field is required"),
    confirmPassword:
      page == 1
        ? Yup.string()

            .required("Field is required")
            .oneOf([Yup.ref("password")], "Passwords must match")
        : Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (page === 0) {
          const res = await axios.post(signInPath, values);
          navigate("/");
          dispatchAdmin(res.data.admin);
          localStorage.setItem("token", res.data.token);
          resetForm();
        } else {
          startLoading();
          const res = await axios.post(signUpPath, values);
          dispatchAdmin(res.data.admin);
          setTimeout(() => {
            resetForm();
          }, 1500);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const errorHolder = {
    email: (
      <span style={errorMessage}>
        {formik.touched.email ? <span>{formik.errors.email}</span> : null}
      </span>
    ),
    password: (
      <span style={errorMessage}>
        {formik.touched.password ? <span>{formik.errors.password}</span> : null}
      </span>
    ),
    confirmPassword: (
      <span style={errorMessage}>
        {formik.touched.confirmPassword ? (
          <span>{formik.errors.confirmPassword}</span>
        ) : null}
      </span>
    ),
  };

  return {
    validationSchema,
    formik,
    errorHolder,
  };
};

export default useFormAdminActions;
