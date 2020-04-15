import React, { useContext } from "react";
import parse from "html-react-parser";
import { CartContext } from "./cart-context";
import { metrics } from "../fixtures/metrics";

export const RowTable = (props) => {
    const setCart = useContext(CartContext)[1];
    const addToCart = (e) => {
        const checked = !e.target.checked;
        const contract = { id: props.id, addr: props.data.contractAddress };
        setCart((c) =>
            checked ? c.filter((v) => v.addr !== props.id) : [...c, contract]
        );
    };

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
                <input type="checkbox" onChange={addToCart}></input>
            </td>
            {getTDs()}
        </tr>
    );
};
