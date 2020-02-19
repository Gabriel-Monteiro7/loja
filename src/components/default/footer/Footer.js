import React from "react";

// import { Container } from './styles';
import StyleFooter from "./styles";
import {
  FaGithubAlt,
  FaFacebookF,
  FaTwitter,
  FaCaretDown
} from "react-icons/fa";
import Logo from "../Logo";
export default function Footer() {
  const year = new Date();
  
  return (
    <StyleFooter>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Logo />
          </div>
          <div className="text-center py-3 col-12 py-3 ">
            <span className="">follow us on social media:</span>

            <div className="text-muted py-2 d-flex justify-content-center align-items-center icones">
              <a href="https://www.facebook.com/" title = "Ir para pagina no facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/login?lang=pt" title = "Ir para pagina no Twitter">
                <FaTwitter />
              </a>
              <a href="https://github.com/" title = "Ir para pagina no GitHub">
                <FaGithubAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright text-muted row text-lg-left text-center">
          <div className='col-12 col-lg-4'>© {year.getFullYear()} Todos os direitos reservados.</div>
          <div className="col-12 col-lg-6">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Segurity</span>
            <span>SiteMap</span>
          </div>
          <div className='col-12 col-lg-2 text-lg-right'>
            English <FaCaretDown />
          </div>
        </div>
      </div>
    </StyleFooter>
  );
}
