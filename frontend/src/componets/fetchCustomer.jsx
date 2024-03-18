import { useEffect, useState } from "react";
import Header from "../componets/Header";
import "./styles/FetchCustomerStyle.css";
import { useNavigate } from "react-router-dom";
import validations from '../utils/validations'
import emptyNewCustomer from "../utils/emptyNewCustomer";
import fetchData from "../utils/fetchData";

const FetchCustomer = ({title, endpoint, method, customerToEdit }) => {
  const [customer, setCustomer] = useState(customerToEdit || emptyNewCustomer);
  const [validateInputs, setValidateInputs] = useState(emptyNewCustomer);
  const [evaluated, setEvaluated] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const key = e.target.name
    let value = e.target.value
    if (key === 'cpf' && value.length >= 11) {
       value = validations.formatCPF(value)
    } else if (key === 'phone' && value.length >= 10) {
      value = validations.formatPhone(value)
    }
    setCustomer({ ...customer, [key]: value });
  };

  useEffect(() => {
    const validate = () => {
      const validated = {};
      customer.name.length > 7
        ? (validated["name"] = "valid")
        : (validated["name"] = "invalid");
      validations.validateEmail(customer.email)
        ? (validated["email"] = "valid")
        : (validated["email"] = "invalid");
      validations.validateCPF(customer.cpf)
        ? (validated["cpf"] = "valid")
        : (validated["cpf"] = "invalid");
      validations.validatePhone(customer.phone)
        ? (validated["phone"] = "valid")
        : (validated["phone"] = "invalid");
      validations.validateStatus(customer.status)
        ? (validated["status"] = "valid")
        : (validated["status"] = "invalid");
      setValidateInputs(validated);
    };
    validate();
  }, [customer]);

  const fetchCustomer = async (body) => {
    await fetchData({endpoint, body, method})
    setCustomer(emptyNewCustomer)

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validParms = Object.values(validateInputs).every(
      (e) => e.length > 0 && e !== "invalid"
    );
    if (validParms) {
     await fetchCustomer(customer);
     setEvaluated(false);
     alert(endpoint.split("/")[1] === 'create' ? 'Usuário criado com sucesso!' : 'Usuário editado` com sucesso!');
    } else {
      setEvaluated(true);
    }
  };
  return (
    <>
      <Header />
      <div className="create-container">
        <div className="create">
          <div className="create-title">
            <h2>{title}</h2>
            <p>Informe os campos a seguir para criar o usuário:</p>
          </div>
          <form className="create-form">
            <div className="div-input">
              <input
                placeholder="Nome"
                name="name"
                type="text"
                onChange={handleChange}
                className="form-input"
                value={customer.name}
              />
              {validateInputs.name === "invalid" && evaluated && (
                <small>*Deve conter pelo menos 7 caracteres</small>
              )}
            </div>
            <div className="div-input">
              <input
                placeholder="Email"
                name="email"
                type="email"
                onChange={handleChange}
                className="form-input"
                value={customer.email}
              />
              {validateInputs.email === "invalid" && evaluated && (
                <small>*Preencha com um email válido</small>
              )}
            </div>
            <div className="div-input">
              <input
                placeholder="CPF"
                type="text"
                name="cpf"
                onChange={handleChange}
                className="form-input"
                value={customer.cpf}
              />
              {validateInputs.cpf === "invalid" && evaluated && (
                <small>*Digite um CPF válido</small>
              )}
            </div>
            <div className="div-input">
              <input
                placeholder="Telefone"
                type="text"
                name="phone"
                onChange={handleChange}
                className="form-input"
                value={customer.phone}
              />
              {validateInputs.phone === "invalid" && evaluated && (
                <small>*Digite um número válido</small>
              )}
            </div>
            <div className="div-input">
              <select
                name="status"
                onChange={handleChange}
                id="status"
                className="form-select"
                value={customer.status}
              >
                <option value="">Status</option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
                <option value="desativo">Desativo</option>
                <option value="aguardando">Aguardando Ativação</option>
              </select>
              {validateInputs.status === "invalid" && evaluated && (
                <small>Escolha um opção</small>
              )}
            </div>
            <div className="form-buttons">
              <button
                type="submit"
                className="submit-button"
                onClick={handleSubmit}
              >
               {endpoint.split("/")[1] === 'create' ? 'Criar' : 'Editar'}
              </button>
              <button
                type="button"
                className="back-button"
                onClick={() => navigate("/")}
              >
                Votar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

FetchCustomer.propTypes = {}.isRequired
export default FetchCustomer;
