import { Switch, Route} from "react-router-dom";
import React from "react";
import Home from "../pages/home";
import Carrinho from "../pages/carrinho";
export default function Routes(props) {
  return ( 
      <Switch>
        <Route path="/" component={Home} exact>
          {props.children}
        </Route>
        <Route path="/carrinho" component={Carrinho} exact>
          {props.children}
        </Route>
      </Switch>
  );
}
