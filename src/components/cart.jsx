import React, { useContext } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { CartContext } from "./cart-context";

export const Cart = () => {
    const handleChange = event => {
        console.log(event);
    };

    const [cart, setCart] = useContext(CartContext);
    return (
        <tr>
            <td colSpan="100">
                <Checkbox
                    onChange={handleChange}
                    color="primary"
                    inputProps={{
                        "aria-label": "primary checkbox"
                    }}
                />
                {cart.length} smart contracts selected.
            </td>
        </tr>
    );
};
