import "./App.css";
import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContractFinder } from "./components/contract-finder";
import { ContractList } from "./components/contract-list";
import { handleContracts } from "./services/handle-contracts";
import { CartProvider } from "./components/cart-context";
import { Cart } from "./components/cart";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleContract = handleContracts.bind(this);
        this.state = { loading: false, data: [], total: 0 };
    }
    render = () => (
        <CartProvider>
            <HelmetProvider>
                <Helmet>
                    <title>Smac-Corpus</title>
                </Helmet>
            </HelmetProvider>
            <ContractFinder
                onSubmit={this.handleContract}
                loading={this.state.loading}
            />
            <Cart total={this.state.total} />
            <ContractList data={this.state.data} />
        </CartProvider>
    );
}
