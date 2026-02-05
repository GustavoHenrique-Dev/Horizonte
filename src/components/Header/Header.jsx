import Style from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faComment,
  faXmark,
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();

  return (
    <header className={Style.header}>
      <div className={Style.brand}>
        <h1>Horizonte</h1>
      </div>
      <div className={Style.brandActions}>
        <button
          className={Style.brandActionsButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </div>

      <div className={`${Style.nav} ${isOpen ? Style.navOpen : ""}`}>
        <div className={Style.authMobile}>
          <div className={Style.userImage}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <Link
            className={Style.authMobileEnter}
            onClick={() => setIsOpen(false)}
            to="/register"
          >
            Entrar ou Cadastrar
          </Link>
        </div>
        <div className={Style.navBarLinks}>
          <NavLink
            className={Style.navBarLink}
            onClick={() => setIsOpen(false)}
            to="/"
          >
            Início
          </NavLink>
          <NavLink
            className={Style.navBarLink}
            onClick={() => setIsOpen(false)}
            to="/properties"
          >
            Imóveis
          </NavLink>
          <NavLink
            className={Style.navBarLink}
            onClick={() => setIsOpen(false)}
            to="/about"
          >
            Sobre
          </NavLink>
          <NavLink
            className={Style.navBarLink}
            onClick={() => setIsOpen(false)}
            to="/contact"
          >
            Contato
          </NavLink>
        </div>
        <div className={Style.userActions}>
          <button className={Style.userExit}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} /> Sair
          </button>
        </div>
      </div>

      <div className={Style.authActions}>
        {!user && (
          <>
            <Link className={Style.authEnter} to="/login">
              Entrar
            </Link>
            <Link className={Style.authRegister} to="/register">
              Cadastar
            </Link>
          </>
        )}

        {user && (
          <div className={Style.userProfile}>
            <FontAwesomeIcon icon={faUser} className={Style.userProfileIcon} />
            <div className={Style.userProfileOptions}>
              <p>Minha Conta</p>
              <button>Sair</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
