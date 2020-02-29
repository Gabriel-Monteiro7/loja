import styled from "styled-components";
import { md } from "../../../styles/global";

export default styled.nav`
  transition: 0.3s ease-in-out;
  background: #151515 !important;
  padding: 20px 30px;
  .navbar-brand {
    font-size: 30px;
  }
  a {
    padding: 0px;
    color: white !important;
  }
  .nav-link {
    font-weight: bold;
    transition: 0.3s ease-in-out;
    padding: 0px !important;
    margin: 0px 5px;
    border-bottom: 2px solid transparent;
    line-height: 1.9;
    &:hover {
      border-bottom: 2px solid white;
    }
  }
  @media (max-width: ${md}px) {
    hr {
      margin-top: 10px;
      border-left: 0px solid white !important;
      border-top: 2px solid white !important;
      width: 100%;
    }
  }
  .bag {
    position: relative;z
    a {
      text-decoration: none;
    }
    svg {
      font-size: 20px;
      margin-bottom: 5px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
    span {
      border-radius: 100%;
      right: -16px;
      position: absolute;
      font-size: 11px;
      top: -4px;
      text-align: center;
      color: white;
      height: 16px;
      width: 17px;
      background: #ff0040;
    }
  }
`;
