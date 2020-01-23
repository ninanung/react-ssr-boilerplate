import React from "react";
import { Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";

import Home from "./pages/Home";
import News from "./pages/News";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/news" render={() => <News />} />
        </Switch>
    );
};

export default Router;
