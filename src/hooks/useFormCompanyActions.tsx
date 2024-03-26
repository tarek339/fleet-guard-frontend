import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatches, useSelectors } from ".";
import { errorMessage } from "../assets/themes/styles";

const useFormCompanyActions = () => {
  const { startLoading, dispatchCompany } = useDispatches();
  const { company, admin } = useSelectors();
  const { id } = useParams();

  const validationSchema = Yup.object({
    company: Yup.string().required("Field is Required"),
    firstName: Yup.string().required("Field is Required"),
    lastName: Yup.string().required("Field is Required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Incorrect type of email"
      )
      .required("Field is Required"),
    phone: Yup.string()
      .matches(
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g,
        "Incorrect type of phone number"
      )
      .required("Field is Required"),
    street: Yup.string().required("Field is Required"),
    number: Yup.string().required("Field is Required"),
    zip: Yup.string().required("Field is Required"),
    city: Yup.string().required("Field is Required"),
    licenseNum: Yup.string().required("Field is Required"),
  });

  const path = window.location.pathname === `/edit-profile/${id}`;

  const formik = useFormik({
    initialValues: {
      adminId: admin?._id,
      company: path ? company?.company : "",
      firstName: path ? company?.firstName : "",
      lastName: path ? company?.lastName : "",
      phone: path ? company?.phone : "",
      email: path ? company?.email : "",
      street: path ? company?.street : "",
      number: path ? company?.number : "",
      zip: path ? company?.zip : "",
      city: path ? company?.city : "",
      licenseNum: path ? company?.licenseNum : "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        startLoading();
        const res =
          window.location.pathname === "/register-company"
            ? await axios.post("/company/register-company", values)
            : await axios.put(`/company/edit-profile/${id}`, values);
        dispatchCompany(res.data.company);
        window.location.pathname === "/register-company"
          ? setTimeout(() => {
              resetForm();
            }, 1500)
          : null;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const errorHolder = {
    company: (
      <span style={errorMessage}>
        {formik.touched.company ? <span>{formik.errors.company}</span> : null}
      </span>
    ),
    firstName: (
      <span style={errorMessage}>
        {formik.touched.firstName ? (
          <span>{formik.errors.firstName}</span>
        ) : null}
      </span>
    ),
    lastName: (
      <span style={errorMessage}>
        {formik.touched.lastName ? <span>{formik.errors.lastName}</span> : null}
      </span>
    ),
    email: (
      <span style={errorMessage}>
        {formik.touched.email ? <span>{formik.errors.email}</span> : null}
      </span>
    ),
    phone: (
      <span style={errorMessage}>
        {formik.touched.phone ? <span>{formik.errors.phone}</span> : null}
      </span>
    ),
    street: (
      <span style={errorMessage}>
        {formik.touched.street ? <span>{formik.errors.street}</span> : null}
      </span>
    ),
    number: (
      <span style={errorMessage}>
        {formik.touched.number ? <span>{formik.errors.number}</span> : null}
      </span>
    ),
    zip: (
      <span style={errorMessage}>
        {formik.touched.zip ? <span>{formik.errors.zip}</span> : null}
      </span>
    ),
    city: (
      <span style={errorMessage}>
        {formik.touched.city ? <span>{formik.errors.city}</span> : null}
      </span>
    ),
    licenseNum: (
      <span style={errorMessage}>
        {formik.touched.licenseNum ? (
          <span>{formik.errors.licenseNum}</span>
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

export default useFormCompanyActions;
