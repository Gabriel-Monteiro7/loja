import React from "react";
import { FaChevronDown } from "react-icons/fa";
// import { Container } from './styles';
import StylesFilter from "../../styles/filter";
export default function Filter({ filter,handleFilterUpdate }) {
  return (
    <StylesFilter className="dropdown">
      Ordenar por: 
      <button
        className="btn-drop"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span>{filter}</span>
        <FaChevronDown />
      </button>
      <div className="dropdown-menu m-0" aria-labelledby="dropdownMenuButton">
        <span
          className="dropdown-item"
          onClick={() => {
            handleFilterUpdate("Maior Preço");
          }}
        >
          Maior Preço
        </span>
        <span
          className="dropdown-item"
          onClick={() => {
            handleFilterUpdate("Menor Preço");
          }}
        >
          Menor Preço
        </span>
        <span
          className="dropdown-item"
          onClick={() => {
            handleFilterUpdate("A - Z");
          }}
        >
          A - Z
        </span>
        <span
          className="dropdown-item"
          onClick={() => {
            handleFilterUpdate("Z - A");
          }}
        >
          Z - A
        </span>
      </div>
    </StylesFilter>
  );
}
