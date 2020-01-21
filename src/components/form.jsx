import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        id="sc_code"
                        rows="10"
                        defaultValue=""
                    ></textarea>
                </div>
                <button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={() =>
                        this.props.onFormSubmit(
                            document.getElementById("sc_code").value
                        )
                    }
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
