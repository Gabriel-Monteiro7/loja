import { Switch, Route} from "react-router-dom";
import React from "react";
import Home from "../pages/home";
export default function Routes(props) {
  return ( 
      <Switch>
        <Route path="/" component={Home} exact>
          {props.children}
        </Route>
        <Route path="/d" component={Home} exact>
          {props.children}
        </Route>
      </Switch>
  );
}
