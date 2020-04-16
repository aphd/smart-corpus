import React, { Component } from "react";
import { ContractItem } from "./contract-item";
import { Cart } from "./cart";
import { ContractHeader } from "./contract-header";

export class ContractList extends Component {
    constructor(props) {
        super(props);
        this.total = 0;
    }

    renderRow = (v, i) => (
        <ContractItem id={v.contractAddress} key={i} data={v} />
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
                        <ContractHeader />
                    </thead>
                    <tbody>{this.getRowsData()}</tbody>
                </table>
            )
        );
    }
}
