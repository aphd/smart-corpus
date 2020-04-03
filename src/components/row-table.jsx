import React, { useContext } from "react";
import parse from "html-react-parser";
import { CartContext } from "./cart-context";

export const RowTable = props => {
    const [cart, setCart] = useContext(CartContext);
    const [checked, setChecked] = React.useState(false);
    const addToCart = e => {
        setChecked(e.target.checked);
        const contract = { id: props.id };
        setCart(c =>
            checked ? c.filter((v, i) => v.id !== props.id) : [...c, contract]
        );
    };

    const getURL = addr => `https://etherscan.io/address/${addr}#code`;

    const getTDs = () =>
        props.metrics.map((k, i) => {
            let v = props.data[k];
            if (v.length > 15) {
                let text = `${v.slice(0, 15)}...`;
                v = parse(`<a href="${getURL(v)}" target="_">${text}</a>`);
            }
            return <td key={i}>{v}</td>;
        });

    return (
        <tr key={props.id}>
            <td className="text-right">
                {/* {props.id + 1} */}
                <input
                    checked={checked}
                    type="checkbox"
                    onChange={addToCart}
                ></input>
            </td>
            {getTDs()}
        </tr>
    );
};
