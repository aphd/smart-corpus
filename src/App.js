import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import { CueForm } from "./components/contract-finder";
import { Table } from "./components/metrics-container";
import { handleMetrics } from "./services/handle-metrics";
import { CartProvider } from "./components/cart-context";

class App extends Component {
    constructor(props) {
        super();
        this.handleSubmit = handleMetrics.bind(this);
        this.state = { loading: false, data: [] };
    }

    render = () => {
        return (
            <CartProvider>
                <HelmetProvider>
                    <Helmet>
                        <title>Smac-Corpus</title>
                    </Helmet>
                </HelmetProvider>
                <CueForm
                    onSubmit={this.handleSubmit}
                    loading={this.state.loading}
                />
                <Table data={this.state.data} />
            </CartProvider>
        );
    };
}

export default App;
