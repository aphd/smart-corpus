import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button } from "@material-ui/core";

class CueForm extends Component {
    render() {
        return (
            <Formik
                initialValues={{ licence: "", balance: "" }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log("Submit: ", data);
                    setSubmitting(false);
                }}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        <Field
                            placeholder="Licence"
                            name="licence"
                            type="input"
                            as={TextField}
                        />
                        <Field
                            placeholder="Balance"
                            name="balance"
                            type="input"
                            as={TextField}
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
