import React from "react";
import Helmet from "react-helmet";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./Router";

class App extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>App</title>
                </Helmet>
                <Header />
                <Router />
                <Footer />
            </div>
        );
    }
}

export default App;
