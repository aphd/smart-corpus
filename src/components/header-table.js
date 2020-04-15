import React from "react";
import { metrics } from "../fixtures/metrics";

export const HeaderTable = (props) => {
    const getMetrics = () => Object.values(metrics);

    const getTh = (v, i) => <th key={i}>{v}</th>;

    const getHeader = () => getMetrics().map(getTh);

    return (
        <tr>
            <td> </td> {getHeader()}
        </tr>
    );
};
