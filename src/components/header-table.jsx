import React, { Component } from "react";

export default class HeaderTable extends Component {
    getHeader = function(metrics) {
        return metrics.map((metric, index) => {
            metric = metric.replace("_", " ");
            return (
                <th className="align-middle" key={index}>
                    {metric.toLowerCase()}
                </th>
            );
        });
    };

    render = () => (
        <tr>
            <td className="text-right">#</td>
            {this.getHeader(this.props.metrics)}
        </tr>
    );
}
