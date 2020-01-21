import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Checkbox } from "@material-ui/core";

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
            >
                {({ values, isSubmitting }) => (
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
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}
            </Formik>
        );
    }
}

export default CueForm;
