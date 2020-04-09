import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import { CueForm } from "./components/cue-form";
import { Table } from "./components/table";
import { handleMetrics } from "./services/handle-metrics";
import { CartProvider } from "./components/cart-context";

class App extends Component {
    constructor(props) {
        super();
        this.handleSubmit = handleMetrics.bind(this);
    }

    render = () => {
        return (
            <CartProvider>
                <HelmetProvider>
                    <Helmet>
                        <title>Smac-Corpus</title>
                    </Helmet>
                </HelmetProvider>
                <CueForm onSubmit={this.handleSubmit} />
                <Table data={this.state && this.state.data} />
            </CartProvider>
        );
    };
}

export default App;
