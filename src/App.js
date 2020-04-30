import "./App.css";
import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContractFinder } from "./components/contract-finder";
import { ContractList } from "./components/contract-list";
import { handleContracts, addToCart } from "./services/handle-contracts";
import { Cart } from "./components/cart";
import ReactGA from "react-ga";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleContract = handleContracts.bind(this);
        this.handleCart = addToCart.bind(this);
        this.state = { loading: false, data: [], nFound: 0, cart: [] };
        ReactGA.initialize("UA-155858412-3");
        ReactGA.pageview(window.location.pathname);
    }

    render = () => (
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Smac-Corpus</title>
                </Helmet>
            </HelmetProvider>
            <ContractFinder
                onSubmit={this.handleContract}
                loading={this.state.loading}
            />
            <Cart nFound={this.state.nFound} cart={this.state.cart} />
            <ContractList
                data={this.state.data}
                onClick={this.handleCart}
                cart={this.state.cart}
            />
        </React.Fragment>
    );
}
