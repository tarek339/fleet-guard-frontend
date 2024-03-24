import dayjs from "dayjs";
import { DateSelector, FlexColumn, FlexRow, FormButton } from "..";
import { header } from "../../assets/themes/styles/card";
import { useTruckFormActions } from "../../hooks";
import InputField from "../parents/form/InputField";

const AddTruck = () => {
  const { formik, errorHolder } = useTruckFormActions();

  return (
    <form onSubmit={formik.handleSubmit}>
      <span style={header}>Add Truck</span>
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
            error={Boolean(formik.errors.type) && Boolean(formik.touched.type)}
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
            error={formik.errors.nextHU && formik.touched.nextHU ? true : false}
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
            error={formik.errors.nextHU && formik.touched.nextHU ? true : false}
            errorText={errorHolder.nextSP}
          />
        </FlexRow>
        <FormButton title={"submit"} />
      </FlexColumn>
    </form>
  );
};

export default AddTruck;
