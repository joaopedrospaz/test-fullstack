import { useMemo, useState } from "react";
import editContext from "./editContext";

const EditProvider = ({ children }) => {
  const [customerData, setCustomerData] = useState();
  const values = useMemo(
    () => ({
      customerData,
      setCustomerData,
    }),
    [customerData]
  );
  return <editContext.Provider value={values}>{children}</editContext.Provider>;
};

EditProvider.propTypes = {}.isRequired;

export default EditProvider;
