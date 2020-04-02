import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import { CueForm } from "./components/cue-form";
import { Table } from "./components/table";
import { handleSubmit } from "./services/handleSubmit";
import { CartProvider } from "./components/cart-context";

class App extends Component {
    constructor(props) {
        super();
        this.handleSubmit = handleSubmit.bind(this);
    }

    render = () => {
        return (
            <CartProvider>
                <main>
                    <HelmetProvider>
                        <Helmet>
                            <title>Smac-Corpus</title>
                        </Helmet>
                    </HelmetProvider>
                    <CueForm onSubmit={this.handleSubmit} />
                    <Table data={this.state && this.state.data} />
                </main>
            </CartProvider>
        );
    };
}

export default App;
