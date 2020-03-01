import styled from "styled-components";
import { sm } from "../../styles/global";

export default styled.div`
  /* min-height: 100vh; */
  background: white;
  margin-top: 55px;
  border-radius: 10px;
  padding: 40px;
  margin-top: 120px;
  @media (max-width: ${sm}px) {
    padding: 40px 0px;
    .produto-subTotal,
    .footer-carrinho {
      display: block !important;
      text-align: center;
    }
    .produto-input {
      justify-content: space-between;
    }
  }

  img {
    height: 100px;
    @media (max-width: ${sm}px) {
      height: 55px;
    }
  }
  .row {
    width: 100%;
    margin: 0px;
  }
  .body {
    div {
      align-self: center;
      position: relative;
      font-weight: bold;
      margin: 15px 0px;
      input {
        border: 1px solid #bdbdbd;
        color: #151515;
        width: 50px;
        outline: none;
        margin: 0px 5px;
        font-weight: bold;
      }
      @media (max-width: ${sm}px) {
        font-size: 12px;
        .titulo,
        .label-subTotal {
          font-size: 10px;
          display: block;
        }
        input {
          width: 30px;
        }
      }
    }
  }
  .head {
    @media (max-width: ${sm}px) {
      font-size: 12px;
    }
    span {
      color: #bdbdbd;
      font-weight: bold;
    }
  }
  .btn-excluir {
    color: #ff0040;
  }
  .btn-input {
    svg {
      background: #151515;
      border-radius: 50%;
      padding: 2px;
      vertical-align: middle;
      color: white;
    }
  }
  button {
    padding: 0px;
    outline: none;
    font-size: inherit;
    opacity: 0.8;
    &:hover,
    &:active {
      opacity: 1;
    }
    svg {
      vertical-align: baseline;
    }
  }
  .produto-subTotal,
  .produto-input,
  .footer-carrinho {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .produto-input {
    justify-content: initial;
  }
  .titulo {
    font-size: 12px;
    display: block;
  }
  .footer-carrinho {
    border-top: 1px solid #f2f2f2;
    .btn-compra {
      color: white;
      background: #155be4;
      padding: 8px 18px;
      font-size: 14px;
      font-weight: bold;
    }
    .disabled {
      pointer-events: none;
    }

    .preco-total {
      font-size: 25px;
    }
  }
`;
