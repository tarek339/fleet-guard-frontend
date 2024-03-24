import { useEffect } from "react";
import { useDriverFormActions, useFetchProperties } from "../../hooks";
import {
  BackButton,
  Block,
  DateSelector,
  FlexColumn,
  FlexRow,
  FormButton,
  InputField,
  Selector,
} from "../../components";
import { header } from "../../assets/themes/styles/card";
import dayjs from "dayjs";
import { form } from "../../assets/themes/styles/form";
import { MenuItem } from "@mui/material";

const EditDriver = () => {
  const { formik, errorHolder, licenseTypes, options } = useDriverFormActions();
  const { getDriverProfile } = useFetchProperties();

  useEffect(() => {
    getDriverProfile();
  }, []);

  return (
    <Block>
      <BackButton title={"Edit Driver"} />
      <form
        onSubmit={formik.handleSubmit}
        style={{ ...form, maxWidth: "470px" }}
      >
        <span style={header}>Edit data</span>
        <FlexColumn gap="5px">
          <FlexRow
            gap="17px"
            style={{
              paddingTop: "17px",
            }}
          >
            <InputField
              name={"firstName"}
              label={"First name"}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.firstName) &&
                Boolean(formik.touched.firstName)
              }
              children={errorHolder.firstName}
            />
            <InputField
              name={"lastName"}
              label={"Last name"}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.lastName) &&
                Boolean(formik.touched.lastName)
              }
              children={errorHolder.lastName}
            />
          </FlexRow>

          <InputField
            name={"phoneNumber"}
            label={"Phone number"}
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.phoneNumber) &&
              Boolean(formik.touched.phoneNumber)
            }
            children={errorHolder.phoneNumber}
          />

          <InputField
            name={"licenseNum"}
            label={"License number"}
            value={formik.values.licenseNum}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.licenseNum) &&
              Boolean(formik.touched.licenseNum)
            }
            children={errorHolder.licenseNum}
          />

          <FlexRow gap="20px">
            <Selector
              name={"licenseType"}
              label={"License type"}
              value={formik.values.licenseType}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.licenseType) &&
                Boolean(formik.touched.licenseType)
              }
              errorText={errorHolder.licenseType}
              children={licenseTypes.map((type, i) => {
                return (
                  <MenuItem key={i} value={type}>
                    {type}
                  </MenuItem>
                );
              })}
            />
            <DateSelector
              name={"typeValidU"}
              label={"Valid untill"}
              views={["year", "month", "day"]}
              format={"DD.MM.YYYY"}
              value={
                formik.values.typeValidU
                  ? (dayjs(formik.values.typeValidU) as unknown as string)
                  : null
              }
              onChange={(value) => {
                formik.setFieldValue("typeValidU", dayjs(value));
              }}
              error={
                formik.errors.typeValidU && formik.touched.typeValidU
                  ? true
                  : false
              }
              errorText={errorHolder.typeValidU}
            />
          </FlexRow>

          <FlexRow gap="20px">
            <Selector
              name={"codeNum"}
              label={"Code number"}
              value={formik.values.codeNum}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.codeNum) &&
                Boolean(formik.touched.codeNum)
              }
              errorText={errorHolder.codeNum}
              children={options.map((opt, i) => {
                return (
                  <MenuItem key={i} value={opt}>
                    {opt}
                  </MenuItem>
                );
              })}
            />

            <DateSelector
              name={"codeNumValidU"}
              label={"Valid untill"}
              views={["year", "month", "day"]}
              format={"DD.MM.YYYY"}
              value={
                formik.values.codeNumValidU
                  ? (dayjs(formik.values.codeNumValidU) as unknown as string)
                  : null
              }
              onChange={(value) => {
                formik.setFieldValue("codeNumValidU", dayjs(value));
              }}
              error={
                formik.errors.codeNumValidU && formik.touched.codeNumValidU
                  ? true
                  : false
              }
              errorText={errorHolder.codeNumValidU}
            />
          </FlexRow>

          <InputField
            name={"driverCardNum"}
            label={"Driver card number"}
            value={formik.values.driverCardNum}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.driverCardNum) &&
              Boolean(formik.touched.driverCardNum)
            }
            children={errorHolder.driverCardNum}
          />

          <DateSelector
            name={"driverCardNumValidU"}
            label={"Valid untill"}
            views={["year", "month", "day"]}
            format={"DD.MM.YYYY"}
            value={
              formik.values.driverCardNumValidU
                ? (dayjs(
                    formik.values.driverCardNumValidU
                  ) as unknown as string)
                : null
            }
            onChange={(value) => {
              formik.setFieldValue("driverCardNumValidU", dayjs(value));
            }}
            error={
              formik.errors.driverCardNumValidU &&
              formik.touched.driverCardNumValidU
                ? true
                : false
            }
            errorText={errorHolder.driverCardNumValidU}
          />

          <FormButton title={"submit"} />
        </FlexColumn>
      </form>
    </Block>
  );
};

export default EditDriver;
