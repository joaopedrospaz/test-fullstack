import "./styles/HeaderStyle.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <img
          className="uol-image"
          src="https://conteudo.imguol.com.br/c/home/layout/vueland/icons/brand/uol-logo-full.svg?v9"
          alt="logo uol"
        />
      </div>
      <div className="header-title-container">
        <h1 id="header-title">Painel de Clientes</h1>
      <div className="line"></div>
      </div>
    </div>
  );
};

export default Header;
