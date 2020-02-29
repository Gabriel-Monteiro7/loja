import React, {useContext } from "react";
import Logo from "../Logo";
import StyleNavBar from "./styles";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { ProdutosContext } from "../../../contexts/ProdutosContext";

export default function NavBar() {
  const { produtosComprados } = useContext(ProdutosContext);

  return (
    <StyleNavBar className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container pr-0">
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#conteudoNavbarSuportado"
          aria-controls="conteudoNavbarSuportado"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse px-3 "
          id="conteudoNavbarSuportado"
        >
          <ul className="navbar-nav w-100 mt-2 mt-lg-0 d-lex align-items-center">
            <li className="nav-item px-1">
              <Link className="nav-link" to="/" title="Home">
                Home
              </Link>
            </li>
            <li className="nav-item ml-auto bag">
              <Link className="" to="/carrinho" title="Carrinho">
                <FaShoppingBag />
                <span>{produtosComprados.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </StyleNavBar>
  );
}
