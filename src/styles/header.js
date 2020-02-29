import styled from "styled-components";
import {sm} from './global'
export const Header = styled.header`
  margin-top: 150px;
  margin-bottom:20px;
  width: 55%;
  text-align: justify;
  &:after {
    margin-top: 50px;
    content: "";
    background-image: url(${(props)=>props.background !== undefined ? props.background : ''});
    background-repeat: no-repeat;
    background-position: right center;
    opacity: 0.8;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    @media(max-width:${sm}px){
        background-size:cover;
        background-position:center;
    }
  }
  @media(max-width:${sm}px){
        text-align:center;
        width: 100%;
    }
  span{
    font-weight:bold;
    margin-left:108px;
    @media(max-width:${sm}px){
      margin-left:0;
    }
  }
`;
