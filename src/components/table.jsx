import React, { Component } from "react";
import RowTable from "./row-table";
import SelectContracts from "./select-contracts";
import HeaderTable from "./header-table";
import { metrics } from "../utils/metrics";

export class Table extends Component {
    constructor(props) {
        super(props);
        this.NUM_ROWS = 100;
    }

    getRowsData = function() {
        var items = this.props.data.slice(0, this.NUM_ROWS);
        var metrics = this.props.data.metrics;
        return items.map((row, i) => {
            return <RowTable key={i} index={i} data={row} metrics={metrics} />;
        });
    };

    render() {
        const shouldRendTheComponent =
            this.props.data && this.props.data.length > 0;
        if (shouldRendTheComponent) {
            this.props.data.metrics = metrics(this.props.data[0]);
        }

        return (
            shouldRendTheComponent && (
                <table className="table table-hover table-sm table-bordered mt-5">
                    <thead>
                        <SelectContracts />
                        <HeaderTable metrics={this.props.data.metrics} />
                    </thead>
                    <tbody>{this.getRowsData()}</tbody>
                </table>
            )
        );
    }
}
