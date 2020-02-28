import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import CueForm from "./components/cue-form";
import SmacList from "./components/smac-list";

class App extends Component {
    handleSubmit = par => {
        console.log("handleSubmit", par);
    };

    render = () => {
        return (
            <main className="container-fluid">
                <HelmetProvider>
                    <Helmet>
                        <title>Smac-Corpus</title>
                    </Helmet>
                </HelmetProvider>
                <CueForm onSubmit={this.handleSubmit} />
                <SmacList />
            </main>
        );
    };
}

export default App;
