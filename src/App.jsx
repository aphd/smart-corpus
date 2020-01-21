import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import CueForm from "./components/cue-form";

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
            </main>
        );
    };
}

export default App;
