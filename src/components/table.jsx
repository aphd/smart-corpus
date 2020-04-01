import React, { Component } from "react";
import RowTable from "./row-table";

export class Table extends Component {
    constructor(props) {
        super(props);
        this.NUM_ROWS = 100;
    }

    getKeys = function() {
        let keys = Object.keys(this.props.data[0]).filter((v, i) => {
            return v !== "_id";
        });
        let index = keys.indexOf("contractAddress");
        if (index > -1) {
            keys.splice(index, 1);
            keys.unshift("contractAddress");
        }

        return keys;
    };

    getHeader = function() {
        var keys = this.getKeys();

        return keys.map((key, index) => {
            key = key.replace("_", " ");

            return (
                <th className="align-middle" key={index}>
                    {key.toLowerCase()}
                </th>
            );
        });
    };

    getRowsData = function() {
        var items = this.props.data.slice(0, this.NUM_ROWS);
        var keys = this.getKeys();
        return items.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <RowTable key={index} data={row} keys={keys} />
                </tr>
            );
        });
    };

    render() {
        return (
            this.props.data &&
            this.props.data.length > 0 && (
                <table className="table table-hover table-sm table-bordered mt-5">
                    <thead>
                        <tr>
                            <td>#</td>
                            {this.getHeader()}
                        </tr>
                    </thead>
                    <tbody>{this.getRowsData()}</tbody>
                </table>
            )
        );
    }
}
