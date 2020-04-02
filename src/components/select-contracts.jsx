import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default class SelectContracts extends Component {
    render() {
        const handleChange = event => {
            console.log(event);
        };
        return (
            <tr>
                <td colSpan="100">
                    <Checkbox
                        onChange={handleChange}
                        color="primary"
                        inputProps={{
                            "aria-label": "primary checkbox"
                        }}
                    />
                </td>
            </tr>
        );
    }
}
