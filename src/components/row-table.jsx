import React, { Component } from "react";
import parse from "html-react-parser";

export default class RowTable extends Component {
    getURL = addr => `https://etherscan.io/address/${addr}#code`;

    getTDs = props => {
        return props.metrics.map((k, i) => {
            let v = props.data[k];
            if (v.length > 15) {
                let text = `${v.slice(0, 15)}...`;
                v = parse(`<a href="${this.getURL(v)}" >${text}</a>`);
            }
            return <td key={i}>{v}</td>;
        });
    };

    render = () => (
        <tr key={this.props.id}>
            <td className="text-right">
                {this.props.id + 1} <input type="checkbox" />
            </td>
            {this.getTDs(this.props)}
        </tr>
    );
}
