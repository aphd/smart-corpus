import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import CueForm from "./components/cue-form";
import SmacList from "./components/smac-list";

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            smacs: []
        };
    }
    handleSubmit = par => {
        console.log("handleSubmit", par);

        fetch("https://smac.ga/", {
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ smacs: data });
            })
            .catch(err => {
                console.log("catch:\n", err);
            });
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
                <SmacList smacs={this.state.smacs} />
            </main>
        );
    };
}

export default App;
