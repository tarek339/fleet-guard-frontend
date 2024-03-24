import { useEffect } from "react";
import { Block, Header, Table } from "../../components";
import withRestrictions from "../../hoc/withRestrictions";
import { useDispatches } from "../../hooks";

const CompaniesListing = () => {
  const { changePage } = useDispatches();

  useEffect(() => {
    changePage(0);
    localStorage.removeItem("company");
  }, []);

  return (
    <Block>
      <Header title={"Companies"} />
      <Table />
    </Block>
  );
};

export default withRestrictions(CompaniesListing);
