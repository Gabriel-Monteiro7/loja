import React,{useContext} from "react";
import StylesList from "../../styles/listaProdutos";
import { ProdutosContext } from "../../contexts/ProdutosContext";

export default function ListaProdutos() {
  const {
    produtos,adicionarProdutoComprado
  } = useContext(ProdutosContext);
  return (
    <StylesList className="container row mx-auto my-5">
      {produtos.map((value, indice) => {
        return (
          <li key={indice} className="col-lg-3 col-md-4 col-6">
            <div className="produto">
              <div className='text-center'>
                <img src={value.img} alt={value.titulo}></img>
              </div>
              <div className="informacoes-produto">
                <label className="marca">{value.labelMarca}</label>
                <label className="titulo">{value.titulo}</label>
                <label className="preco">{value.precoFormatado}</label>
              </div>
              <button href="/" className="btn-compra" onClick={()=>adicionarProdutoComprado(value)}>
                Comprar
              </button>
            </div>
          </li>
        );
      })}
    </StylesList>
  );
}
