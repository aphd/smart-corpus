import React, { Component } from "react";
import parse from "html-react-parser";

export default class RowTable extends Component {
    render() {
        return this.props.keys.map((key, index) => {
            let value = this.props.data[key];
            if (this.props.data[key].length > 10) {
                value = parse(`<a href="#">${value.slice(0, 15)}...</a>`);
            }
            return <td key={index}>{value}</td>;
        });
    }
}
