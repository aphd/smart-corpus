import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button } from "@material-ui/core";
import cueFormValidation from "./cue-form-validation";
import { formOptions } from "../services/handleSubmit";

export class CueForm extends Component {
    render() {
        console.log();
        return (
            <Formik
                initialValues={{ Type: "Any", CV: "Any" }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    this.props.onSubmit(data);
                    setSubmitting(false);
                }}
                validationSchema={cueFormValidation}
            >
                {({ values, errors, isSubmitting }) => (
                    <Form>
                        <Field
                            name="Type"
                            as={TextField}
                            select
                            label="Contract type"
                            SelectProps={{
                                native: true
                            }}
                        >
                            {Object.entries(formOptions.contract_types).map(
                                v => (
                                    <option key={v[1]}>{v[1]}</option>
                                )
                            )}
                        </Field>
                        <Field
                            name="CV"
                            as={TextField}
                            select
                            label="pragma version"
                            SelectProps={{
                                native: true
                            }}
                        >
                            {Object.entries(formOptions.pragma_versions).map(
                                v => (
                                    <option key={v[1]}>{v[1]}</option>
                                )
                            )}
                        </Field>
                        <Field
                            name="SLOC"
                            as={TextField}
                            select
                            label="Source lines of code"
                            SelectProps={{
                                native: true
                            }}
                        >
                            {Object.entries(formOptions.greater_than).map(
                                (k, v) => (
                                    <option key={v}>{k[0]}</option>
                                )
                            )}
                        </Field>
                        <Field
                            name="NF"
                            as={TextField}
                            select
                            label="Number of functions"
                            SelectProps={{
                                native: true
                            }}
                        >
                            {Object.entries(formOptions.greater_than).map(
                                (k, v) => (
                                    <option key={v}>{k[0]}</option>
                                )
                            )}
                        </Field>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            submit
                        </Button>
                        {/* <pre>Errors: {JSON.stringify(errors, null, 2)}</pre>
                        <pre>Values: {JSON.stringify(values, null, 2)}</pre> */}
                    </Form>
                )}
            </Formik>
        );
    }
}
