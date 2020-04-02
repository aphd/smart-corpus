import React from "react";

export const HeaderTable = props => {
    const getHeader = function() {
        return props.metrics.map((metric, index) => {
            metric = metric.replace("_", " ");
            return (
                <th className="align-middle" key={index}>
                    {metric.toLowerCase()}
                </th>
            );
        });
    };

    return (
        <tr>
            <td className="text-right">#</td>
            {getHeader()}
        </tr>
    );
};
