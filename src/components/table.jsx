import React, { Component } from "react";
import { RowTable } from "./row-table";
import { Cart } from "./cart";
import { HeaderTable } from "./header-table";
import { metrics } from "../utils/metrics";

export class Table extends Component {
    constructor(props) {
        super(props);
        this.METRICS = null;
        this.total = 0;
    }

    getRowsData = () => {
        return this.props.data.map((v, i) => {
            return <RowTable key={i} id={i} data={v} metrics={this.METRICS} />;
        });
    };

    render() {
        const shouldRendTheComponent =
            this.props.data && this.props.data.length > 0;
        if (shouldRendTheComponent) {
            this.METRICS = metrics(this.props.data[0]);
            this.total = this.props.data.length;
        }

        return (
            shouldRendTheComponent && (
                <table className="table table-hover table-sm table-bordered mt-5">
                    <thead>
                        <Cart total={this.total} />
                        <HeaderTable metrics={this.METRICS} />
                    </thead>
                    <tbody>{this.getRowsData()}</tbody>
                </table>
            )
        );
    }
}
