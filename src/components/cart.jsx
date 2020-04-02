import React, { useContext } from "react";
import { CartContext } from "./cart-context";

export const Cart = () => {
    const [cart] = useContext(CartContext);
    return (
        <tr>
            <td colSpan="100">{cart.length} smart contracts selected.</td>
        </tr>
    );
};
