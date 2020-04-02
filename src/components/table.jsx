import React, { Component } from "react";
import { RowTable } from "./row-table";
import { Cart } from "./cart";
import { HeaderTable } from "./header-table";
import { metrics } from "../utils/metrics";

export class Table extends Component {
    constructor(props) {
        super(props);
        this.NUM_ROWS = 100;
        this.METRICS = null;
    }

    getRowsData = function() {
        return this.props.data.map((v, i) => {
            return <RowTable key={i} id={i} data={v} metrics={this.METRICS} />;
        });
    };

    render() {
        const shouldRendTheComponent =
            this.props.data && this.props.data.length > 0;
        if (shouldRendTheComponent) {
            this.METRICS = metrics(this.props.data[0]);
        }

        return (
            shouldRendTheComponent && (
                <table className="table table-hover table-sm table-bordered mt-5">
                    <thead>
                        <Cart />
                        <HeaderTable metrics={this.METRICS} />
                    </thead>
                    <tbody>{this.getRowsData()}</tbody>
                </table>
            )
        );
    }
}
