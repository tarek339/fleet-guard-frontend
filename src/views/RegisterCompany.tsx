import { header } from "../assets/themes/styles/card";
import { form } from "../assets/themes/styles/form";
import {
  Block,
  FlexColumn,
  FlexRow,
  FormButton,
  Header,
  InputField,
} from "../components";
import withRestrictions from "../hoc/withRestrictions";
import { useFormCompanyActions } from "../hooks";

const RegisterCompany = () => {
  const { formik, errorHolder } = useFormCompanyActions();

  return (
    <Block>
      <Header title={"Add Company"} />
      <form
        onSubmit={formik.handleSubmit}
        style={{ ...form, maxWidth: "450px" }}
      >
        <span style={header}>Add new company</span>
        <FlexColumn style={{ marginTop: "17px" }} gap={"5px"}>
          <InputField
            name={"company"}
            label={"Company"}
            value={formik.values.company}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.company) && Boolean(formik.touched.company)
            }
            children={errorHolder.company}
          />

          <FlexRow gap="20px">
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
            name={"email"}
            label={"Email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.email) && Boolean(formik.touched.email)
            }
            children={errorHolder.email}
          />

          <InputField
            name={"phone"}
            label={"Phone number"}
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.phone) && Boolean(formik.touched.phone)
            }
            children={errorHolder.phone}
          />

          <FlexRow gap="17px">
            <FlexColumn style={{ width: "90%" }}>
              <InputField
                name={"street"}
                label={"Street"}
                value={formik.values.street}
                onChange={formik.handleChange}
                error={
                  Boolean(formik.errors.street) &&
                  Boolean(formik.touched.street)
                }
                children={errorHolder.street}
              />
            </FlexColumn>
            <FlexColumn>
              <InputField
                name={"number"}
                label={"Number"}
                value={formik.values.number}
                onChange={formik.handleChange}
                error={
                  Boolean(formik.errors.number) &&
                  Boolean(formik.touched.number)
                }
                children={errorHolder.number}
              />
            </FlexColumn>
          </FlexRow>
          <FlexRow gap="17px">
            <FlexColumn>
              <InputField
                name={"zip"}
                label={"Zip"}
                value={formik.values.zip}
                onChange={formik.handleChange}
                error={
                  Boolean(formik.errors.zip) && Boolean(formik.touched.zip)
                }
                children={errorHolder.zip}
              />
            </FlexColumn>
            <FlexColumn style={{ width: "80%" }}>
              <InputField
                name={"city"}
                label={"City"}
                value={formik.values.city}
                onChange={formik.handleChange}
                error={
                  Boolean(formik.errors.city) && Boolean(formik.touched.city)
                }
                children={errorHolder.city}
              />
            </FlexColumn>
          </FlexRow>
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
          <FormButton title={"submit"} />
        </FlexColumn>
      </form>
    </Block>
  );
};

export default withRestrictions(RegisterCompany);
