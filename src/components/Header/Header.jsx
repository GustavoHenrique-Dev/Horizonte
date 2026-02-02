import Style from "./Header.module.css"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className={Style.header}>
      <div className={Style.headerLogo}>
        <h1>Horizonte</h1>
      </div>

      <div className={Style.navBar}>
        <div className={Style.navBar-Auth}>
          <button>Entrar</button>
          <button>Cadastrar</button>
        </div>
        <div className={Style.navBar-Links}>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/properties">Imóveis</NavLink>
          <NavLink to="/about">Sobre</NavLink>
          <NavLink to="/contact">Contato</NavLink>
        </div>
        <div className={Style.navBar-logOut}>
          <button>Sair</button>
          <button>Configurações</button>
        </div>
      </div>

      <div className={Style.headerAuth}>
        <button>Entrar</button>
        <button>Cadastar</button>
      </div>
    </header>
  )
}

export default Header