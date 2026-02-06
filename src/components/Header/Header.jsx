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
import { useState, useEffect, useRef } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const { user } = useAuthContext();
  const { logOut } = useAuth();
  const firstLetter = user?.displayName?.trim().charAt(0).toUpperCase();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setNavIsOpen(false);
        setUserMenuIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={Style.header}
    >
      <div className={Style.brand}>
        <h1>Horizonte</h1>
      </div>
      <div className={Style.brandActions}>
        <button
          className={Style.brandActionsButton}
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          <FontAwesomeIcon icon={navIsOpen ? faXmark : faBars} />
        </button>
      </div>

      <div className={`${Style.nav} ${navIsOpen ? Style.navOpen : ""}`}>
        <div className={Style.authMobile}>
          <div className={Style.userImage}>
            <p className={Style.firstLetterUser}>
              {firstLetter || (
                <FontAwesomeIcon
                  icon={faUser}
                  className={Style.userAvatarIcon}
                />
              )}
            </p>
          </div>
          <div className={Style.authMobileInfos}>
            {!user && (
              <Link
                className={Style.authMobileEnter}
                onClick={() => setNavIsOpen(false)}
                to="/register"
              >
                Entrar ou Cadastrar
              </Link>
            )}
            {user && (
              <>
                <h2>{user.displayName}</h2>
                <p>{user.email}</p>
              </>
            )}
          </div>
        </div>

        <div className={Style.navBarLinks}>
          <NavLink
            className={Style.navBarLink}
            onClick={() => setNavIsOpen(false)}
            to="/"
          >
            Início
          </NavLink>
          <NavLink
            className={Style.navBarLink}
            onClick={() => setNavIsOpen(false)}
            to="/properties"
          >
            Imóveis
          </NavLink>
          <NavLink
            className={Style.navBarLink}
            onClick={() => setNavIsOpen(false)}
            to="/about"
          >
            Sobre
          </NavLink>
          <NavLink
            className={Style.navBarLink}
            onClick={() => setNavIsOpen(false)}
            to="/contact"
          >
            Contato
          </NavLink>
        </div>
        <div className={Style.userActions}>
          <button
            className={Style.userExit}
            onClick={() => {
              (logOut(), setNavIsOpen(false));
            }}
          >
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
          <>
            <div
              className={Style.userAvatar}
              onClick={() => setUserMenuIsOpen(!userMenuIsOpen)}
            >
              <p className={Style.firstLetterUser}>{firstLetter}</p>
            </div>
            <div
              className={`${Style.userMenu} ${userMenuIsOpen ? Style.userMenuOpen : ""}`}
            >
              <div className={Style.userInfos}>
                <div className={Style.userAvatar}>
                  <p className={Style.firstLetterUser}>{firstLetter}</p>
                </div>
                <div className={Style.userInfo}>
                  <h2>{user.displayName}</h2>
                  <p>{user.email}</p>
                </div>
              </div>
              <div className={Style.userOptions}>
                <Link className={Style.linkToAccount}>
                  <FontAwesomeIcon
                    icon={faUser}
                    className={Style.userAvatarIcon}
                  />{" "}
                  Minha Conta
                </Link>
                <button onClick={logOut}>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} /> Sair
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
