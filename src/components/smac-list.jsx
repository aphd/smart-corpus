import React, { Component } from "react";

class SmacList extends Component {
    constructor(props) {
        super();
        this.state = { smacs: [] };
    }

    componentDidMount() {
        fetch("http://localhost:9090/smacs", {
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ smacs: data });
            })
            .catch(err => {
                console.log("catch:\n", err);
            });
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Address</th>
                    </thead>
                    <tbody>
                        {this.state.smacs.map(smac => {
                            return (
                                <tr key={smac.smacId}>
                                    <td>{smac.name}</td>
                                    <td>
                                        <a
                                            target="_"
                                            href={`https://etherscan.io/address/${smac.hash}#code`}
                                        >
                                            {smac.hash}
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SmacList;
