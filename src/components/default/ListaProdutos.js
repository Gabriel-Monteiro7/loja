import React from "react";
import StylesList from "../../styles/listaProdutos";
export default function ListaProdutos({ produtos }) {
  return (
    <StylesList className="container row mx-auto my-5">
      {produtos.map((value, indice) => {
        return (
          <li key={indice} className="col-lg-3 col-md-4 col-6">
            <div className="produto">
              <a href="/">
                <img src={value.img} alt={value.titulo}></img>
              </a>
              <div className="informacoes-produto">
                <label className="marca">{value.labelMarca}</label>
                <label className="titulo">{value.titulo}</label>
                <label className="preco">{value.precoFormatado}</label>
              </div>
              <a href="/" className="btn-compra">
                Comprar
              </a>
            </div>
          </li>
        );
      })}
    </StylesList>
  );
}
