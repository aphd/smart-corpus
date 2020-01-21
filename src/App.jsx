import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import Form from "./components/form";

class App extends Component {
    handleFormSubmit = sc_code => {
        try {
            this.setState({
                metric: sc_code,
                errors: null
            });
        } catch (error) {
            this.setState({
                metric: null,
                errors: error.errors
            });
        }
    };
    render = () => {
        return (
            <main className="container">
                <HelmetProvider>
                    <Helmet>
                        <title>Smac-Corpus</title>
                    </Helmet>
                </HelmetProvider>
                <Form onFormSubmit={this.handleFormSubmit} />
                {/* <Metrics metric={this.state.metric} />
                <Error errors={this.state.errors} /> */}
            </main>
        );
    };
}

export default App;
