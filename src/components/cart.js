import React from "react";
import { handleContractsDownload } from '../services/handle-download';

export const Cart = (props) => {
    const cart = props.cart;
    const hide = cart.length ? '' : 'd-none';
    const no_hide = cart.length ? 'd-none' : '';
    const smartContractCount = 120_354;
    const dataLink = 'https://github.com/aphd/smart-corpus-api/raw/develop/data/contracts.7z';
    return (
        props.nFound > 0 && (
            <div className="mt-3 mb-1">
                <div className={`alert alert-primary ${no_hide}`} role="alert">
                    Select the checkboxes to download the smart contracts - Smart contracts found:{' '}
                    <span className="badge badge-light">
                        {props.nFound} / {smartContractCount}
                    </span>
                </div>
                <div className="btn-download">
                    <a href={dataLink} className={`btn btn-danger`}>
                        Download all <span className="badge badge-light">{smartContractCount}</span> smart contracts
                        (file size is approximately 500 MB)
                    </a>
                    <button
                        onClick={() => handleContractsDownload(cart)}
                        type="button"
                        className={`btn btn-warning ${hide}`}
                    >
                        Download <span className="badge badge-light">{cart.length}</span> smart contracts
                    </button>
                </div>
            </div>
        )
    );
};
