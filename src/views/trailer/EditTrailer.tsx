import {
  BackButton,
  Block,
  DateSelector,
  FlexColumn,
  FlexRow,
  FormButton,
  InputField,
} from "../../components";
import { useFetchProperties, useTrailerFormActions } from "../../hooks";
import dayjs from "dayjs";
import { useEffect } from "react";
import withRestrictions from "../../hoc/withRestrictions";
import { header, form } from "../../assets/themes/styles";

const EditTrailer = () => {
  const { getTrailerProfile } = useFetchProperties();
  const { formik, errorHolder } = useTrailerFormActions();

  useEffect(() => {
    getTrailerProfile();
  }, []);

  return (
    <Block>
      <BackButton title={"Edit Trailer"} />

      <form
        onSubmit={formik.handleSubmit}
        style={{ ...form, maxWidth: "450px" }}>
        <span style={header}>Edit data</span>
        <FlexColumn gap="5px" style={{ marginTop: "17px" }}>
          <InputField
            name={"indicator"}
            label={"Indicator"}
            value={formik.values.indicator}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.indicator) &&
              Boolean(formik.touched.indicator)
            }
            children={errorHolder.indicator}
          />

          <FlexRow gap="17px">
            <InputField
              name={"brand"}
              label={"Brand"}
              value={formik.values.brand}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.brand) && Boolean(formik.touched.brand)
              }
              children={errorHolder.brand}
            />
            <InputField
              name={"type"}
              label={"Type"}
              value={formik.values.type}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.type) && Boolean(formik.touched.type)
              }
              children={errorHolder.type}
            />
          </FlexRow>

          <InputField
            name={"weight"}
            label={"Weight"}
            value={formik.values.weight}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.weight) && Boolean(formik.touched.weight)
            }
            children={errorHolder.weight}
          />

          <FlexRow gap="17px">
            <DateSelector
              name={"nextHU"}
              label={"Next main insp."}
              views={["year", "month"]}
              format={"MM.YYYY"}
              value={
                formik.values.nextHU
                  ? (dayjs(formik.values.nextHU) as unknown as string)
                  : null
              }
              onChange={(value) => {
                formik.setFieldValue("nextHU", value);
              }}
              error={
                formik.errors.nextHU && formik.touched.nextHU ? true : false
              }
              errorText={errorHolder.nextHU}
            />

            <DateSelector
              name={"nextSP"}
              label={"Next saftey insp."}
              views={["year", "month"]}
              format={"MM.YYYY"}
              value={
                formik.values.nextSP
                  ? (dayjs(formik.values.nextSP) as unknown as string)
                  : null
              }
              onChange={(value) => {
                formik.setFieldValue("nextSP", value);
              }}
              error={
                formik.errors.nextHU && formik.touched.nextHU ? true : false
              }
              errorText={errorHolder.nextSP}
            />
          </FlexRow>
          <FormButton title={"submit"} />
        </FlexColumn>
      </form>
    </Block>
  );
};

export default withRestrictions(EditTrailer);
