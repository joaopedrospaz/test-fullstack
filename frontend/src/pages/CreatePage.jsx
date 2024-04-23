import FetchCustomer from "../componets/fetchCustomer";

const CreateCustomer = () => {
  return (
    <FetchCustomer
     title='Novo usuário'
     endpoint='/customer/create'
     method='POST'
    />
 )

};

export default CreateCustomer;
