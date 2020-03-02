import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button } from "@material-ui/core";
import cueFormValidation from "./cue-form-validation";
import { formOptions } from "../services/handleSubmit";

class CueForm extends Component {
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
                                value => (
                                    <option key={value[1]} value={value[1]}>
                                        {value[0]}
                                    </option>
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
                            {Object.entries(formOptions.pragma_version).map(
                                value => (
                                    <option key={value[1]} value={value[1]}>
                                        {value[0]}
                                    </option>
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

export default CueForm;
