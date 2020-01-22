import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Checkbox } from "@material-ui/core";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    licence: Yup.string()
        .min(3, "Must have at least 3 values")
        .required("Must enter a value")
});

class CueForm extends Component {
    render() {
        return (
            <Formik
                initialValues={{ licence: "", balance: "", hasLicense: false }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log("Submit: ", data);
                    setSubmitting(false);
                }}
                validationSchema={validationSchema}
            >
                {({ values, errors, isSubmitting }) => (
                    <Form>
                        <Field name="licence" type="input" as={TextField} />
                        <Field name="balance" type="input" as={TextField} />
                        <Field
                            name="hasLicense"
                            type="checkbox"
                            as={Checkbox}
                        />
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
