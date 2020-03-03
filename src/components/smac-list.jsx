import React, { Component } from "react";

export class SmacList extends Component {
    constructor(props) {
        super();
    }

    render() {
        const format_date = date => date.substr(0, 16).replace("T", " ");
        return (
            this.props.smacs && (
                <div>
                    <table className="table table-hover table-sm table-bordered mt-5">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Address</th>
                                <th>pragma</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>SLOC</th>
                                <th>NF</th>
                                <th>First_seen</th>
                                <th>Last_seen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.smacs.map((smac, id) => {
                                return (
                                    <tr key={smac._id}>
                                        <td>{id + 1}</td>
                                        <td>
                                            <a
                                                target="_"
                                                href={`https://etherscan.io/address/${smac.address}#code`}
                                            >
                                                {smac.address}
                                            </a>
                                        </td>
                                        <td>{smac.CV}</td>
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
            )
        );
    }
}
