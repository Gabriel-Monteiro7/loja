import React, { useState, useEffect } from "react";
// import { Container } from './styles';
import { Title } from "../../styles/title";
import { Header } from "../../styles/header";
import Section from "../../components/default/section/SectionDefault";
import api from "../../service/api";
export default function Main() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    api.get().then(response => {
      setProdutos(response.data);
    });
  }, []);
  console.log(produtos);

  return (
    <>
      <Section>
        <div className="container">
          <Header>
            <Title>Toy Go</Title>
          </Header>
        </div>
        {produtos.map((value, indice) => {
          return <div key ={indice}>
            <label>{value.label}</label>
            <img src={value.img}></img>
            <label>{value.precoOff}</label>
          </div>;
        })}
      </Section>
    </>
  );
}
