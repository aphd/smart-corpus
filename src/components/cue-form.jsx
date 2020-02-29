import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button, NativeSelect } from "@material-ui/core";
import cueFormValidation from "./cue-form-validation";

class CueForm extends Component {
    render() {
        return (
            <Formik
                initialValues={{ Type: "library", CV: "0.4.25" }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    this.props.onSubmit(data);
                    setSubmitting(false);
                }}
                validationSchema={cueFormValidation}
            >
                {({ values, errors, isSubmitting }) => (
                    <Form>
                        <Field name="Type" as={NativeSelect}>
                            <option value="*">All</option>
                            <option value="interface">Interface</option>
                            <option value="contract">Contract</option>
                            <option value="library">Library</option>
                        </Field>
                        <Field name="CV" type="input" as={TextField} />
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
