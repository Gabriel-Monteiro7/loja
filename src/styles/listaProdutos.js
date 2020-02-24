import styled, { css } from "styled-components";
import {sm} from './global'
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
      a{
        text-align:center;
      }
      &:hover {
        border: 1px solid #007bff;
      }
    }
    img {
      width: 100%;
      max-height: 250px;
      padding: 20px;
    }
    .informacoes-produto {
      ${flexBox}
      justify-content:space-evenly;
      height: 120px;
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
    .btn-compra {
      transition: 0.3s ease-in-out;
      margin-bottom:15px;
      background: #007bff;
      padding: 10px 35px;
      color: white;
      align-self: center;
      border-radius: 7px;
      border:1px solid #007bff;
      font-weight:bold;
      &:hover{
        background:white;
        color:#007bff;
        
      }
      @media(max-width:${sm}px){
        padding: 4px 16px;
        border-radius:5px;
        font-size:12px;
    }
    }
    a{
      text-decoration:none;
    }
  }
`;
