import styled, { css } from "styled-components";
import { sm } from "./global";
const flexBox = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
`;
export default styled.ul`
  li {
    padding: 8px;
    list-style: none;
    .produto {
      padding: 4px;
      transition: 0.3s ease-in-out;
      border-radius: 5px;
      border: 1px solid transparent;
      background: white;
      height: 100%;
      ${flexBox}
      button {
        text-align: center;
      }
      &:hover {
        border: 1px solid #155be4;
      }
    }
    img {
      width: 70%;
      max-height: 200px;
      padding: 15px;
      @media (max-width: ${sm}px) {
        width: 100%;
        max-height: 250px;
      }
    }
    .informacoes-produto {
      ${flexBox}
      justify-content:space-evenly;
      height: 125px;
      @media (max-width: ${sm}px) {
        justify-content: space-between;
      }
    }
    .preco,
    .marca {
      color: #bdbdbd;
    }
    .marca {
      font-weight: bold;
      text-transform: uppercase;
    }
    label {
      font-size: 13px;
    }
    @media (max-width: ${sm}px) {
      .titulo {
        font-size: 11px;
      }
    }
    .btn-compra {
      transition: 0.3s ease-in-out;
      margin-bottom: 15px;
      background: #155be4;
      padding: 10px 35px;
      color: white;
      align-self: center;
      border-radius: 7px;
      border: 1px solid #155be4;
      font-weight: bold;
      font-size:14px;
      &:hover {
        background: white;
        color: #155be4;
      }
      @media (max-width: ${sm}px) {
        padding: 6px 16px;
        border-radius: 5px;
        font-size: 13px;
      }
    }
    a {
      text-decoration: none;
    }
  }
  .page-item {
  }
`;
