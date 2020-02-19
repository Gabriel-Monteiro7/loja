import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css'
// Dispositivos small (telefones em modo paisagem, com 576px ou mais)
export const sm = 576;

// Dispositivos médios (tablets com 768px ou mais)
export const md = 768;

// Dispositivos large (desktops com 992px ou mais)
export const lg = 992;

// Dispositivos extra large (desktops grandes com 1200px ou mais)
export const xl = 1200;
export const GlobalStyle = createGlobalStyle`
    margin:0px;
    padding:0px;
    outline:0px;
    box-sizing:border-box;
    html,body,#root{
        
        font-family: sans-serif;
        min-height:100%;
    }
    body{
        -webkit-font-smoothing: antialiased !important;
    }
    .btn,a,button{
        
        cursor: pointer;
    }
    .btn,button{
        font-size:12px;
        padding: 2px 10px;
        border:0px ;
        outline:none;
        background:transparent;
        border-radius:3px;
    }
    #root{
        /* max-width:1020px; */

    }


    ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;

}
::-webkit-scrollbar-thumb {

    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #6E6E6E;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}
`;
