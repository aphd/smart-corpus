import React from "react";
import parse from "html-react-parser";

export const RowTable = props => {
    const getURL = addr => `https://etherscan.io/address/${addr}#code`;

    const getTDs = () => {
        return props.metrics.map((k, i) => {
            let v = props.data[k];
            if (v.length > 15) {
                let text = `${v.slice(0, 15)}...`;
                v = parse(`<a href="${getURL(v)}" >${text}</a>`);
            }
            return <td key={i}>{v}</td>;
        });
    };

    return (
        <tr key={props.id}>
            <td className="text-right">
                {props.id + 1} <input type="checkbox" />
            </td>
            {getTDs()}
        </tr>
    );
};
