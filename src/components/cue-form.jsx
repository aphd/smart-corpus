import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button } from "@material-ui/core";
import cueFormValidation from "./cue-form-validation";

class CueForm extends Component {
    render() {
        return (
            <Formik
                initialValues={{ Type: "library" }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    this.props.onSubmit(data);
                    setSubmitting(false);
                }}
                validationSchema={cueFormValidation}
            >
                {({ values, errors, isSubmitting }) => (
                    <Form>
                        <Field name="Type" type="input" as={TextField} />
                        <div>
                            <Button type="submit" disabled={isSubmitting}>
                                submit
                            </Button>
                        </div>
                        <pre>Errors: {JSON.stringify(errors, null, 2)}</pre>
                        <pre>Values: {JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}
            </Formik>
        );
    }
}

export default CueForm;
