import React from "react";

// import { Container } from './styles';
import StyleSection from "./styles";
export default function Section(props) {
  return <StyleSection background = {props.background}>{props.children}</StyleSection>;
}
