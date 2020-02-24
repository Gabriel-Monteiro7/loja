import styled from "styled-components";
import {sm} from './global'

export default styled.span`
  transition: 0.1s ease-in-out;
  font-size: 45px;
  left: 94%;
  margin-bottom:20px;
  cursor: pointer;
  svg {
    transition: 0.3s ease-in-out;
    color: white;
    border-radius: 50%;
    background:#155BE4;
    padding: 16px;
    opacity:0.8;
    &:hover {
      
      opacity:1
    }
  }
  @media (max-width: ${sm}px) {
    left: 85%;
  }
`;
