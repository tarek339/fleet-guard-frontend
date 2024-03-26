import { useFormik } from "formik";
import axios from "axios";
import { useDispatches, useFetchProperties, useSelectors } from ".";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { errorMessage } from "../assets/themes/styles";

const useTrailerFormActions = () => {
  const { startLoading, dispatchTrailer } = useDispatches();
  const { company, trailer } = useSelectors();
  const { id } = useParams();
  const { fetchProperties } = useFetchProperties();

  const validationSchema = Yup.object({
    indicator: Yup.string().required("Field is Required"),
    brand: Yup.string().required("Field is Required"),
    type: Yup.string().required("Field is Required"),
    weight: Yup.string().required("Field is Required"),
    nextHU: Yup.string().required("Field is Required"),
    nextSP: Yup.string().required("Field is Required"),
  });

  const path = window.location.pathname === `/edit-trailer/${id}`;

  const formik = useFormik({
    initialValues: {
      companyId: company._id,
      indicator: path ? trailer.indicator : "",
      brand: path ? trailer.brand : "",
      type: path ? trailer.type : "",
      weight: path ? trailer.weight : "",
      nextHU: path ? dayjs(trailer.nextHU) : "",
      nextSP: path ? dayjs(trailer.nextSP) : "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        startLoading();
        const res =
          window.location.pathname === `/company-profile/${id}`
            ? await axios.post("/trailer/register-trailer", values)
            : await axios.put(`/trailer/edit-profile/${id}`, values);

        dispatchTrailer(res.data.trailer);
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
    indicator: (
      <span style={errorMessage}>
        {formik.touched.indicator ? (
          <span>{formik.errors.indicator}</span>
        ) : null}
      </span>
    ),
    brand: (
      <span style={errorMessage}>
        {formik.touched.brand ? <span>{formik.errors.brand}</span> : null}
      </span>
    ),
    type: (
      <span style={errorMessage}>
        {formik.touched.type ? <span>{formik.errors.type}</span> : null}
      </span>
    ),
    weight: (
      <span style={errorMessage}>
        {formik.touched.weight ? <span>{formik.errors.weight}</span> : null}
      </span>
    ),
    nextHU: (
      <span style={errorMessage}>
        {formik.touched.nextHU ? <span>{formik.errors.nextHU}</span> : null}
      </span>
    ),
    nextSP: (
      <span style={errorMessage}>
        {formik.touched.nextSP ? <span>{formik.errors.nextSP}</span> : null}
      </span>
    ),
  };

  return {
    formik,
    errorHolder,
  };
};

export default useTrailerFormActions;
