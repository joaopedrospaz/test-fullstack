import { useEffect, useState, useContext } from "react";
import "./styles/HomeStyle.css";
import Header from "../componets/Header";
import { useNavigate } from "react-router-dom";
import editContext from "../context/editContext";
import fetchData from "../utils/fetchData";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  const { setCustomerData } = useContext(editContext);

  useEffect(() => {
    const fetchCustomers = async () => {
      const endpoint = '/customer'
      const method = 'GET'
      const data = await fetchData({endpoint, method})
        setCustomers(data);
        setLoading(false);
      }
    fetchCustomers();
  }, []);

  const handleClick = (event) => {
    const findCustomer = customers.find((e) => e.id == event.target.id);
    setCustomerData(findCustomer);
    navigate("/update");
  };
  const changeStatus = (status) => {
    if (status === 'aguardando') {
      return 'Aguando Ativação'
    } 
    return status.charAt(0).toUpperCase() + status.slice(1)
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home">
          <div className="home-header">
            <div className="home-title">
              <h2>Listagem de usuários</h2>
              <p>Escolha um cliente para visualizar os detalhes</p>
            </div>
            <button
              onClick={() => navigate("/create")}
              className="header-buttom"
            >
              Novo cliente
            </button>
          </div>
          {loading ? (
            <h1>...Loading</h1>
          ) : (
            <div className="container-customer">
              {customers.map((e) => (
                <div className="customer-card" key={e.id}>
                  <div className="double-elements">
                    <p className="top-element">{e.name}</p>
                    <p className="bottom-element">{e.email}</p>
                  </div>
                  <div className="double-elements">
                    <p className="top-element">{e.cpf}</p>
                    <p className="bottom-element">{e.phone}</p>
                  </div>
                  <div className="status">
                    <div className={e.status}></div>
                  <p>{changeStatus(e.status)}</p>
                  </div>
                  <button
                    onClick={handleClick}
                    id={e.id}
                    className="card-button"
                  >
                    Editar
                  </button>
                </div>
              ))}
            </div>
          )}
          <p>Exibindo {customers.length} clientes</p>
        </div>
      </div>
    </>
  );
};

export default Home;
