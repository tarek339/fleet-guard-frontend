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

const SignUp = () => {
  const { formik, errorHolder } = useFormAdminActions();
  const { removePage } = useDispatches();
  return (
    <form onSubmit={formik.handleSubmit} style={{ ...form, maxWidth: "450px" }}>
      <Motion>
        <Header style={{ marginTop: "0px" }} title={"Sign up"} />
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

          <InputField
            name={"confirmPassword"}
            type={"password"}
            label={"Confirm password"}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.confirmPassword) &&
              Boolean(formik.touched.confirmPassword)
            }
            children={errorHolder.confirmPassword}
          />

          <FormButton title={"submit"} />
          <FlexRow style={{ paddingLeft: "10px" }}>
            <Section
              message={"Allready a user?"}
              buttonText={"Sing in"}
              onClick={removePage}
            />
          </FlexRow>
        </FlexColumn>
      </Motion>
    </form>
  );
};

export default SignUp;
