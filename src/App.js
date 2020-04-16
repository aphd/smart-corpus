import "./App.css";
import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContractFinder } from "./components/contract-finder";
import { MetricList } from "./components/metric-list";
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
                <ContractFinder
                    onSubmit={this.handleSubmit}
                    loading={this.state.loading}
                />
                <MetricList data={this.state.data} />
            </CartProvider>
        );
    };
}

export default App;
