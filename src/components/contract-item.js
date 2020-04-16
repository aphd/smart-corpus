import React from "react";
import parse from "html-react-parser";
import { metrics } from "../fixtures/metrics";

export const ContractItem = (props) => {
    const getURL = (addr) => `https://etherscan.io/address/${addr}#code`;

    const getTD = (k, i) => {
        let v = props.data[k];
        if (v.length > 15) {
            let text = `${v.slice(0, 15)}...`;
            v = parse(`<a href="${getURL(v)}" target="_">${text}</a>`);
        }
        return <td key={i}>{v}</td>;
    };

    const getTDs = () => Object.keys(metrics).map(getTD);

    return (
        <tr key={props.id}>
            <td className="text-right">
                <input
                    checked={props.cart.indexOf(props.id) > -1}
                    type="checkbox"
                    onClick={(e) => props.onClick(e, props.id)}
                ></input>
            </td>
            {getTDs()}
        </tr>
    );
};
