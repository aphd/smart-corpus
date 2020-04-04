import React, { useContext } from "react";
import { CartContext } from "./cart-context";
import { handleContractsDownload } from "../services/handle-contracs-download";

export const Cart = () => {
    const [cart] = useContext(CartContext);
    const hide = cart.length ? "" : "d-none";
    const no_hide = cart.length ? "d-none" : "";
    const onContractsDownload = () => {
        handleContractsDownload(cart);
    };
    return (
        <tr>
            <td colSpan="100">
                <button type="button" className={`btn btn-info ${no_hide}`}>
                    Select the checkboxes to download the smart contracts
                </button>
                <button
                    onClick={onContractsDownload}
                    type="button"
                    className={`btn btn-info ${hide}`}
                >
                    Download{" "}
                    <span className="badge badge-light">{cart.length}</span>{" "}
                    smart contracts
                </button>
            </td>
        </tr>
    );
};
