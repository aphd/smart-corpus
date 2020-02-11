import React, { Component } from "react";

class SmacList extends Component {
    constructor(props) {
        super();
        this.state = { smacs: [] };
    }

    componentDidMount() {
        fetch("http://localhost:8080/adr", {
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
                    {/* TODO based on the json it should be automatic */}
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>SLOC</th>
                            <th>NF</th>
                            <th>FS</th>
                            <th>LS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.smacs.map(smac => {
                            return (
                                <tr key={smac._id}>
                                    <td>
                                        <a
                                            target="_"
                                            href={`https://etherscan.io/address/${smac.address}#code`}
                                        >
                                            {smac.address}
                                        </a>
                                    </td>
                                    <td>{smac.ContractName}</td>
                                    <td>{smac.Type}</td>
                                    <td>{smac.SLOC}</td>
                                    <td>{smac.NF}</td>
                                    <td>{smac.FS}</td>
                                    <td>{smac.LS}</td>
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
