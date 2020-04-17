import React from "react";
import { handleContractsDownload } from "../services/handle-download";

export const Cart = (props) => {
    const cart = props.cart;
    const hide = cart.length ? "" : "d-none";
    const no_hide = cart.length ? "d-none" : "";
    return (
        props.nFound > 0 && (
            <div className="mt-3 mb-1">
                <div className={`alert alert-primary ${no_hide}`} role="alert">
                    Select the checkboxes to download the smart contracts -
                    Smart contracts found:{" "}
                    <span className="badge badge-light">
                        {props.nFound} / 11251
                    </span>
                </div>
                <button
                    onClick={() => handleContractsDownload(cart)}
                    type="button"
                    className={`btn btn-danger ${hide}`}
                >
                    Download{" "}
                    <span className="badge badge-light">{cart.length}</span>{" "}
                    smart contracts
                </button>
            </div>
        )
    );
};
