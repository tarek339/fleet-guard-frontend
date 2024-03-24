import { Block, SignIn, SignUp } from "..";
import { useSelectors } from "../../hooks";

const AuthHolder = () => {
  const { page } = useSelectors();

  return (
    <Block style={{ marginTop: "3em" }}>
      {page == 0 ? <SignIn /> : page == 1 ? <SignUp /> : <></>}
    </Block>
  );
};

export default AuthHolder;
