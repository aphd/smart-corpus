import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { TextField } from "@material-ui/core";
import { options } from "../services/handle-metrics";

// export class CueForm extends Component {
export const CueForm = (props) => {
    return (
        <Formik
            initialValues={{ Type: "Any", CV: "Any" }}
            onSubmit={(data) => props.onSubmit(data)}
        >
            {({ values, errors, isSubmitting }) => (
                <Form>
                    {/* TODO add a factory method */}
                    <Field
                        name="vrsion"
                        as={TextField}
                        select
                        label="pragma version"
                        SelectProps={{
                            native: true,
                        }}
                    >
                        {Object.entries(options.pragma_versions).map((v) => (
                            <option key={v[1]}>{v[1]}</option>
                        ))}
                    </Field>
                    <Field
                        name="total_lines"
                        as={TextField}
                        select
                        label="Source lines of code"
                        SelectProps={{
                            native: true,
                        }}
                    >
                        {Object.entries(options.greater_than).map((k, v) => (
                            <option key={v}>{k[0]}</option>
                        ))}
                    </Field>
                    <Field
                        name="functions"
                        as={TextField}
                        select
                        label="Number of functions"
                        SelectProps={{
                            native: true,
                        }}
                    >
                        {Object.entries(options.greater_than).map((k, v) => (
                            <option key={v}>{k[0]}</option>
                        ))}
                    </Field>
                    <Field
                        name="modifiers"
                        as={TextField}
                        select
                        label="Number of modifiers"
                        SelectProps={{
                            native: true,
                        }}
                    >
                        {Object.entries(options.greater_than).map((k, v) => (
                            <option key={v}>{k[0]}</option>
                        ))}
                    </Field>
                    <Field
                        name="payable"
                        as={TextField}
                        select
                        label="Number of payable"
                        SelectProps={{
                            native: true,
                        }}
                    >
                        {Object.entries(options.greater_than).map((k, v) => (
                            <option key={v}>{k[0]}</option>
                        ))}
                    </Field>
                    <button
                        type="submit"
                        className={`btn btn-primary`}
                        disabled={props.loading}
                    >
                        <span
                            className={`spinner-border spinner-border-sm ${
                                props.loading ? "mr-2" : "d-none"
                            }`}
                        ></span>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};
