import React, { useState, useEffect } from "react";
// import { Container } from './styles';
import { Title } from "../../styles/title";
import { Header } from "../../styles/header";
import Section from "../../components/default/section/SectionDefault";
import api from "../../service/api";
import ListaProdutos from "../../components/default/ListaProdutos";
import Filter from "../../components/default/Filter";
import { formatPrice } from "../../util/format";
export default function Main() {
  const [produtos, setProdutos] = useState([]);
  const [filter, setFilter] = useState("A - Z");
  useEffect(() => {
    api.get().then(response => {
      let novosProdutos = response.data.map(produto => ({
          ...produto,
          precoFormatado: formatPrice(produto.preco)
        }))
      setProdutos(
        novosProdutos.sort((a, b) => {
          return a.titulo > b.titulo ? 1 : b.titulo > a.titulo ? -1 : 0;
        })
      )
    })
  }, []);
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
    setProdutos(produtos.map((produto)=>({
      ...produto,precoFormatado: formatPrice(produto.preco)
    })))
  }  
  return (
    <>
      <Section background={"#F8F8F8"}>
        <div className="container">
          <Header>
            <span>Lançamentos</span>
            <Title>Toy Go</Title>
          </Header>
          <Filter
            filter={filter}
            handleFilterUpdate={value => {
              handleFilterUpdate(value);
            }}
          />
        </div>

        {produtos.length !== 0 ? (
          <ListaProdutos produtos={produtos} />
        ) : (
          <div className="text-center my-5">
            <img
              src={
                "https://nexonev.tatamotors.com/wp-content/themes/tata-nexon/images/loading.gif"
              }
              alt="loading"
            />
          </div>
        )}
      </Section>
    </>
  );
}
