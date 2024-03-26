import {
  FlexColumn,
  FlexRow,
  FormButton,
  Header,
  InputField,
  Motion,
  Section,
} from "..";
import { form } from "../../assets/themes/styles";
import { useDispatches, useFormAdminActions } from "../../hooks";

const SignIn = () => {
  const { formik, errorHolder } = useFormAdminActions();
  const { addPage } = useDispatches();
  return (
    <form onSubmit={formik.handleSubmit} style={{ ...form, maxWidth: "450px" }}>
      <Motion>
        <Header style={{ marginTop: "0px" }} title={"Sign in"} />
        <FlexColumn gap={"10px"}>
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
            name={"password"}
            type={"password"}
            label={"Password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.password) &&
              Boolean(formik.touched.password)
            }
            children={errorHolder.password}
          />
          <FormButton title={"submit"} />
          <FlexRow style={{ paddingLeft: "10px" }}>
            <Section
              message={"Not a user?"}
              buttonText={"Sing up"}
              onClick={addPage}
            />
          </FlexRow>
        </FlexColumn>
      </Motion>
    </form>
  );
};

export default SignIn;
