import React, { useState, useEffect } from "react";
// import { Container } from './styles';
import { Title } from "../../styles/title";
import { Header } from "../../styles/header";
import Section from "../../components/default/section/SectionDefault";
import api from "../../service/api";
import ListaProdutos from "../../components/default/ListaProdutos";
import Filter from "../../components/default/Filter";
import Paginacao from "../../components/default/Paginacao";
export default function Main() {
  const [produtos, setProdutos] = useState([]);
  const [filter, setFilter] = useState("A - Z");
  const [page, setPage] = useState(1);
  useEffect(() => {
    setProdutos([]);
    api.get("" + page).then(response => {
      setProdutos(
        response.data.sort((a, b) => {
          return a.titulo > b.titulo ? 1 : b.titulo > a.titulo ? -1 : 0;
        })
      );
      if (response.data.length===0 || response.data === false) {
        alert('Não existe mais produtos, será redirecionado para primeira página')
        setPage(1)
      }
      window.scroll(0, 0);
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
        <Paginacao
          page={page}
          handlePageUpdate={page => {
            handlePageUpdate(page);
          }}
        />
      </Section>
    </>
  );
}
