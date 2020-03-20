import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import { CueForm } from "./components/cue-form";
import { Table } from "./components/table";
import { handleSubmit } from "./services/handleSubmit";

class App extends Component {
    constructor(props) {
        super();
        this.handleSubmit = handleSubmit.bind(this);
    }

    render = () => {
        return (
            <main>
                <HelmetProvider>
                    <Helmet>
                        <title>Smac-Corpus</title>
                    </Helmet>
                </HelmetProvider>
                <CueForm onSubmit={this.handleSubmit} />
                <Table data={this.state && this.state.data} />
            </main>
        );
    };
}

export default App;
