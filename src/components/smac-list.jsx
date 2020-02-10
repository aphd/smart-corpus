import React, { Component } from "react";

class SmacList extends Component {
    constructor(props) {
        super();
        this.state = { smacs: [] };
    }

    componentDidMount() {
        fetch("https://smac.ga/adr", {
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
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.smacs.map(smac => {
                            return (
                                <tr key={smac._id}>
                                    <td>{smac.name}</td>
                                    <td>
                                        <a
                                            target="_"
                                            href={`https://etherscan.io/address/${smac.address}#code`}
                                        >
                                            {smac.address}
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
