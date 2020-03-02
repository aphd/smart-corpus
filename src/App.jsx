import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import CueForm from "./components/cue-form";
import SmacList from "./components/smac-list";
import { handleSubmit } from "./services/handleSubmit";

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            smacs: []
        };
        this.handleSubmit = handleSubmit.bind(this);
    }

    render = () => {
        return (
            <main className="container-fluid">
                <HelmetProvider>
                    <Helmet>
                        <title>Smac-Corpus</title>
                    </Helmet>
                </HelmetProvider>
                <CueForm onSubmit={this.handleSubmit} />
                <SmacList smacs={this.state.smacs} />
            </main>
        );
    };
}

export default App;
