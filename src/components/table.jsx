import React, { Component } from "react";
import RowTable from "./row-table";

export class Table extends Component {
    constructor(props) {
        super(props);
        this.NUM_ROWS = 100;
    }

    moveToFirstPosition = function(keys, value) {
        let index = keys.indexOf(value);
        if (index > -1) {
            keys.splice(index, 1);
            keys.unshift("contractAddress");
        }
        return keys;
    };

    removeElements = (keys, valuesToRemove) =>
        keys.filter(i => valuesToRemove.indexOf(i) === -1);

    getKeys = function() {
        let keys = Object.keys(this.props.data[0]);
        keys = this.removeElements(keys, ["_id", "AvgNL", "FS", "LS"]);
        return this.moveToFirstPosition(keys, "contractAddress");
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
                    <td className="text-right">
                        {index + 1} <input type="checkbox" />
                    </td>
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
                            <td className="text-right">#</td>
                            {this.getHeader()}
                        </tr>
                    </thead>
                    <tbody>{this.getRowsData()}</tbody>
                </table>
            )
        );
    }
}
