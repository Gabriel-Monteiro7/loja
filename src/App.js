import React from "react";
import Footer from "./components/default/footer/Footer";
import NavBar from "./components/default/navbar/Navbar";
import Routes from "./routes";
import ButtonTop from "./components/default/ButtonTop";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import ProdutosContextProvider from "./contexts/ProdutosContext";
function App() {
  return (
    <BrowserRouter>
      <ProdutosContextProvider>
        <NavBar />
        <Routes />
        <ButtonTop />
        <Footer />
        <GlobalStyle />
      </ProdutosContextProvider>
    </BrowserRouter>
  );
}

export default App;
