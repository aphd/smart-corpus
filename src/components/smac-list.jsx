import React, { Component } from "react";

class SmacList extends Component {
    constructor(props) {
        super();
        this.state = { smacs: [] };
    }

    componentDidMount() {
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
    }

    render() {
        const format_date = date => date.substr(0, 16).replace("T", " ");
        return (
            <div>
                <table className="table table-hover table-sm table-bordered">
                    {/* TODO based on the json it should be automatic */}
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>SLOC</th>
                            <th>NF</th>
                            <th>First_seen</th>
                            <th>Last_seen</th>
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
                                    <td>{format_date(smac.FS)}</td>
                                    <td>{format_date(smac.LS)}</td>
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
