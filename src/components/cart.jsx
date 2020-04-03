import React, { useContext } from "react";
import { CartContext } from "./cart-context";

export const Cart = () => {
    const [cart] = useContext(CartContext);
    const hide = cart.length ? "" : "d-none";
    const no_hide = cart.length ? "d-none" : "";
    const raw =
        "https://github.com/aphd/smac-corpus-api/raw/master/data/json.7z";
    return (
        <tr>
            <td colSpan="100">
                <button type="button" className={`btn btn-info ${no_hide}`}>
                    Select the checkboxes to download the smart contracts
                </button>
                <a href={raw}>
                    <button type="button" className={`btn btn-info ${hide}`}>
                        Download{" "}
                        <span className="badge badge-light">{cart.length}</span>{" "}
                        smart contracts
                    </button>
                </a>
            </td>
        </tr>
    );
};
