import React, { useContext, useState, useEffect } from "react";

import Section from "../../components/default/section/SectionDefault";
import ListaCarrinho from "./styles";
import { FaTrash, TiMinus, TiPlus } from "react-icons/all";
import { ProdutosContext } from "../../contexts/ProdutosContext";
import {formatPrice} from '../../util/format'
export default function Carrinho() {
  const {
    produtosComprados,
    removerProdutoComprado,
    adicionarProdutoComprado,
    removerProdutolista,
    zerarCarrinho
  } = useContext(ProdutosContext);
  const [valorTotal,setValorTotal] = useState('')
  useEffect(()=>{
    let valor = 0;
    produtosComprados.map((value)=>{
      return valor+=value.preco*value.comprados
      
    })
    setValorTotal(formatPrice(valor))
  },[produtosComprados])


  return (
    <Section background={"#151515"}>
      <ListaCarrinho className="container">
        <div className="row head mb-3">
          <div className="col-2" />
          <div className="col-4">
            <span>Produto</span>
          </div>
          <div className="col-3">
            <span>Quantidade</span>
          </div>
          <div className="col-3">
            <span>SubTotal</span>
          </div>
        </div>
        {produtosComprados.map((produto, indice) => {
          return (
            <div className="row body" key={indice}>
              <div className="produto-img col-2">
                <img src={produto.img} alt={produto.titulo} />
              </div>
              <div className="produto-titulo col-4">
                <span className="titulo">{produto.titulo} </span>
                <span>{produto.precoFormatado}</span>
              </div>
              <div className="produto-input col-3">
                <button
                  className="btn-input"
                  onClick={() => {
                    removerProdutoComprado(produto);
                  }}
                >
                  <TiMinus />
                </button>
                <input type="text" value={produto.comprados} readOnly />
                <button
                  className="btn-input"
                  onClick={() => {
                    adicionarProdutoComprado(produto);
                  }}
                >
                  <TiPlus />
                </button>
              </div>
              <div className="produto-subTotal col-3">
                <span className="label-subTotal">{produto.subTotal}</span>
                <button
                  title="Excluir produto"
                  className={`btn-excluir `}
                  onClick={() => removerProdutolista(produto)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}
        <div className="footer-carrinho pt-5">
          <button className={`btn-compra my-2 ${produtosComprados.length===0 && 'disabled'}`} onClick={()=>{zerarCarrinho()}}>Finalizar Pedido</button>
          <div>
            <strong className="label-total mr-2 text-muted">TOTAL</strong>
            <strong className="preco-total">{`${valorTotal}`}</strong>
          </div>
        </div>
      </ListaCarrinho>
    </Section>
  );
}
