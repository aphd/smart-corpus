import React from "react";
import { handleContractsDownload } from "../services/handle-download";

export const Cart = (props) => {
    const cart = props.cart;
    const hide = cart.length ? "" : "d-none";
    const no_hide = cart.length ? "d-none" : "";
    return (
        props.total > 0 && (
            <div className="mt-3 mb-1">
                <button type="button" className={`btn btn-info ${no_hide}`}>
                    Select the checkboxes to download the smart contracts -
                    Total number of contracts:{" "}
                    <span className="badge badge-light">{props.total}</span>
                </button>
                <button
                    onClick={() => handleContractsDownload(cart)}
                    type="button"
                    className={`btn btn-info ${hide}`}
                >
                    Download{" "}
                    <span className="badge badge-light">{cart.length}</span>{" "}
                    smart contracts
                </button>
            </div>
        )
    );
};
