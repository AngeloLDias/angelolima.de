import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Presentation from "./app/pages/Presentation/Presentation";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Presentation} />
      </Switch>
    </BrowserRouter>
  );
}
