/* eslint-disable no-restricted-globals */
import React, { createContext, useState, useEffect } from "react";
import api from "../service/api";

export const ProdutosContext = createContext();

const ProdutosContextProvider = props => {
  const [produtos, setProdutos] = useState([]);
  const [filter, setFilter] = useState("A - Z");
  const [page, setPage] = useState(1);
  const [proximo, setProximo] = useState(true);
  const [produtosComprados, setProdutoscomprado] = useState([]);
  useEffect(() => {
    window.scroll(0, 0);
    api.get("" + (page + 1)).then(response => {
      if (response.data.length > 1) {
        setProximo(true);
      } else {
        setProximo(false);
      }
    });
    setProdutos([]);
    api.get("" + page).then(response => {
      setProdutos(
        response.data.sort((a, b) => {
          return a.titulo > b.titulo ? 1 : b.titulo > a.titulo ? -1 : 0;
        })
      );
      // if (response.data.length===0 || response.data === false) {
      //   alert('Não existe mais produtos, será redirecionado para primeira página')
      //   setPage(1)
      // }
    });
  }, [page]);
  function handleFilterUpdate(value) {
    setFilter(value);
    if (value === "A - Z" || value === "Z - A") {
      let sinal = value === "A - Z" ? 1 : -1;
      setProdutos(
        produtos.sort((a, b) => {
          return a.titulo > b.titulo
            ? 1 * sinal
            : b.titulo > a.titulo
            ? -1 * sinal
            : 0;
        })
      );
    } else {
      let sinal = value === "Maior Preço" ? -1 : 1;
      setProdutos(
        produtos.sort((a, b) => {
          return a.preco > b.preco
            ? 1 * sinal
            : b.preco > a.preco
            ? -1 * sinal
            : 0;
        })
      );
    }
  }
  function handlePageUpdate(value) {
    setPage(value);
  }
  function adicionarProdutoComprado(value) {
    if (confirm("Você deseja adicionar um produto?")) {
      const produto = produtosComprados;
      const retorno = produto.filter((valueAux, indice) => {
        return value === valueAux ? true : false;
      });
      if (retorno.length === 0) {
        value.comprados = 1;
        produto.push(value);
        setProdutoscomprado(
          produto.map(valueAux => {
            return valueAux;
          })
        );
      } else {
        retorno[0].comprados += 1;
        setProdutoscomprado(
          produto.map(valueAux => {
            return valueAux.titulo === value.titulo ? retorno[0] : valueAux;
          })
        );
      }
    }
  }
  function removerProdutoComprado(value) {
    if (confirm("Você deseja mesmo excluir o produto?")) {
      const produto = produtosComprados;
      const retorno = produto.filter((valueAux, indice) => {
        return value === valueAux ? true : false;
      });
      if (retorno[0].comprados > 1) {
        retorno[0].comprados -= 1;
        setProdutoscomprado(
          produto.map(valueAux => {
            return valueAux.titulo === value.titulo ? retorno[0] : valueAux;
          })
        );
      } else {
        setProdutoscomprado(
          produto.filter(valueAux => {
            return valueAux.titulo === value.titulo ? false : true;
          })
        );
      }
    }
  }
  function removerProdutolista(value) {
    if (confirm("Você deseja mesmo excluir o produto?")) {
      setProdutoscomprado(
        produtosComprados.filter(valueAux => {
          return valueAux.titulo === value.titulo ? false : true;
        })
      );
    }
  }
  function zerarCarrinho() {
    if (confirm("Você deseja finalizar o pedido?")) {
      setProdutoscomprado([]);
      history.back();
    }
  }

  return (
    <ProdutosContext.Provider
      value={{
        produtos,
        filter,
        page,
        proximo,
        handleFilterUpdate,
        handlePageUpdate,
        adicionarProdutoComprado,
        produtosComprados,
        removerProdutoComprado,
        removerProdutolista,
        zerarCarrinho
      }}
    >
      {props.children}
    </ProdutosContext.Provider>
  );
};
export default ProdutosContextProvider;
