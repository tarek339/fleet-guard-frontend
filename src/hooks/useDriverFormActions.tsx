import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatches, useFetchProperties, useSelectors } from ".";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { errorMessage } from "../assets/themes/styles";

const useDriverFormActions = () => {
  const { startLoading, dispatchDriver } = useDispatches();
  const { company, driver } = useSelectors();
  const { id } = useParams();
  const { fetchProperties } = useFetchProperties();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Field is Required"),
    lastName: Yup.string().required("Field is Required"),
    phoneNumber: Yup.string()
      .matches(
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g,
        "Incorrect type of phone number"
      )
      .required("Field is Required"),
    licenseNum: Yup.string().required("Field is Required"),
    licenseType: Yup.string().required("Field is Required"),
    typeValidU: Yup.string().required("Field is Required"),
    codeNum: Yup.string().required("Field is Required"),
    codeNumValidU: Yup.string().required("Field is Required"),
    driverCardNum: Yup.string().required("Field is Required"),
    driverCardNumValidU: Yup.string().required("Field is Required"),
  });

  const path = window.location.pathname === `/edit-driver/${id}`;

  const formik = useFormik({
    initialValues: {
      companyId: company._id,
      firstName: path ? driver.firstName : "",
      lastName: path ? driver.lastName : "",
      phoneNumber: path ? driver.phoneNumber : "",
      licenseNum: path ? driver.licenseNum : "",
      licenseType: path ? driver.licenseType : "",
      typeValidU: path ? dayjs(driver.typeValidU) : "",
      codeNum: path ? driver.codeNum : "",
      codeNumValidU: path ? dayjs(driver.codeNumValidU) : "",
      driverCardNum: path ? driver.driverCardNum : "",
      driverCardNumValidU: path ? dayjs(driver.driverCardNumValidU) : "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        startLoading();
        const res =
          window.location.pathname === `/company-profile/${id}`
            ? await axios.post("/driver/register-driver", values)
            : await axios.put(`/driver/edit-profile/${id}`, values);
        dispatchDriver(res.data.driver);

        window.location.pathname === `/company-profile/${id}`
          ? setTimeout(() => {
              resetForm();
              fetchProperties();
            }, 1500)
          : null;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const errorHolder = {
    firstName: (
      <span style={errorMessage}>
        {formik.touched.firstName && <span>{formik.errors.firstName}</span>}
      </span>
    ),
    lastName: (
      <span style={errorMessage}>
        {formik.touched.lastName && <span>{formik.errors.lastName}</span>}
      </span>
    ),

    phoneNumber: (
      <span style={errorMessage}>
        {formik.touched.phoneNumber && <span>{formik.errors.phoneNumber}</span>}
      </span>
    ),
    licenseNum: (
      <span style={errorMessage}>
        {formik.touched.licenseNum && <span>{formik.errors.licenseNum}</span>}
      </span>
    ),
    licenseType: (
      <span style={errorMessage}>
        {formik.touched.licenseType && <span>{formik.errors.licenseType}</span>}
      </span>
    ),
    typeValidU: (
      <span style={errorMessage}>
        {formik.touched.typeValidU && <span>{formik.errors.typeValidU}</span>}
      </span>
    ),
    codeNum: (
      <span style={errorMessage}>
        {formik.touched.codeNum && <span>{formik.errors.codeNum}</span>}
      </span>
    ),
    codeNumValidU: (
      <span style={errorMessage}>
        {formik.touched.codeNumValidU && (
          <span>{formik.errors.codeNumValidU}</span>
        )}
      </span>
    ),
    driverCardNum: (
      <span style={errorMessage}>
        {formik.touched.driverCardNum && (
          <span>{formik.errors.driverCardNum}</span>
        )}
      </span>
    ),
    driverCardNumValidU: (
      <span style={errorMessage}>
        {formik.touched.driverCardNumValidU && (
          <span>{formik.errors.driverCardNumValidU}</span>
        )}
      </span>
    ),
  };

  const licenseTypes = ["C1", "C1E", "C", "CE"];

  const options = ["YES", "NO"];

  return {
    formik,
    errorHolder,
    licenseTypes,
    options,
  };
};

export default useDriverFormActions;
