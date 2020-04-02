import React, { useContext } from "react";
import parse from "html-react-parser";
import Checkbox from "@material-ui/core/Checkbox";
import { CartContext } from "./cart-context";

export const RowTable = props => {
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
        const contract = {};
        setCart(curr => [...curr, contract]);
    };

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
                {props.id + 1}
                <Checkbox
                    onChange={addToCart}
                    inputProps={{ "aria-label": "primary checkbox" }}
                />
            </td>
            {getTDs()}
        </tr>
    );
};
