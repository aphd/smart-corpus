import React from "react";
import { ContractItem } from "./contract-item";
import { ContractHeader } from "./contract-header";

export const ContractList = (props) => {
    const renderRow = (v, i) => (
        <ContractItem id={v.contractAddress} key={i} data={v} />
    );
    const getRowsData = () => props.data.map(renderRow);

    return (
        props.data.length > 0 && (
            <table className="table table-hover table-sm table-bordered">
                <thead>
                    <ContractHeader />
                </thead>
                <tbody>{getRowsData()}</tbody>
            </table>
        )
    );
};
