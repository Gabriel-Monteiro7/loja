import React, { useContext } from "react";
// import { Container } from './styles';
import { Title } from "../../styles/title";
import { Header } from "../../styles/header";
import Section from "../../components/default/section/SectionDefault";
import ListaProdutos from "../../components/default/ListaProdutos";
import Filter from "../../components/default/Filter";
import Paginacao from "../../components/default/Paginacao";
import { ProdutosContext } from "../../contexts/ProdutosContext";
export default function Main() {
  const {
    produtos,
    filter,
    page,
    handleFilterUpdate,
    handlePageUpdate,
    proximo,
  } = useContext(ProdutosContext);
  return (
    <Section background={"#F8F8F8"}>
      <div className="container">
        <Header>
          <Title>Toy Go</Title>
          <span className="">Lançamentos</span>
        </Header>
        <Filter
          filter={filter}
          handleFilterUpdate={value => {
            handleFilterUpdate(value);
          }}
        />
      </div>

      {produtos.length !== 0 ? (
        <ListaProdutos />
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
        proximo={proximo}
        page={page}
        handlePageUpdate={page => {
          handlePageUpdate(page);
        }}
      />
    </Section>
  );
}
