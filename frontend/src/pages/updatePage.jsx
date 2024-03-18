import { useContext } from "react";
import editContext from "../context/editContext";
import FetchCustomer from "../componets/fetchCustomer";

const EditPage = () => {
    const {customerData} = useContext(editContext);
     
    return (
       <FetchCustomer 
        title='Edite o usuário'
        endpoint='/customer/update'
        method='PUT'
        customerToEdit={customerData}
       />
    )
};

export default EditPage;