import React, { Component } from "react";
import { MetricItem } from "./metric-item";
import { Cart } from "./cart";
import { MetricsHeader } from "./metric-header";

export class MetricList extends Component {
    constructor(props) {
        super(props);
        this.total = 0;
    }

    renderRow = (v, i) => (
        <MetricItem id={v.contractAddress} key={i} data={v} />
    );

    getRowsData = () => this.props.data.map(this.renderRow);

    render() {
        const shouldRendTheComponent =
            this.props.data && this.props.data.length > 0;
        if (shouldRendTheComponent) {
            this.total = this.props.data.length;
        }

        return (
            shouldRendTheComponent && (
                <table className="table table-hover table-sm table-bordered mt-5">
                    <thead>
                        <Cart total={this.total} />
                        <MetricsHeader />
                    </thead>
                    <tbody>{this.getRowsData()}</tbody>
                </table>
            )
        );
    }
}
