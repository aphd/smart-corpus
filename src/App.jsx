import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";

class App extends Component {
    render = () => {
        return (
            <main className="container">
                <HelmetProvider>
                    <Helmet>
                        <title>Smac-Corpus</title>
                    </Helmet>
                </HelmetProvider>
                {/* <Form onFormSubmit={this.handleFormSubmit} />
                <Metrics metric={this.state.metric} />
                <Error errors={this.state.errors} /> */}
            </main>
        );
    };
}

export default App;
