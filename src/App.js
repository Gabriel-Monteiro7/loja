import React from "react";
import Footer from "./components/default/footer/Footer";
import NavBar from "./components/default/navbar/Navbar";
import Routes from "./routes";
import {BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
      <Footer />
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
