import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import CueForm from "./components/cue-form";
import SmacList from "./components/smac-list";

class App extends Component {
    render = () => {
        return (
            <main className="container">
                <HelmetProvider>
                    <Helmet>
                        <title>Smac-Corpus</title>
                    </Helmet>
                </HelmetProvider>
                <CueForm onFormSubmit={this.handleFormSubmit} />
                <SmacList />
            </main>
        );
    };
}

export default App;
