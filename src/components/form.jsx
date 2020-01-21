import React, { Component } from "react";
import { Formik, Field } from "formik";
import { TextField, Button } from "@material-ui/core";

class Form extends Component {
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
                {({
                    values,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
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
                    </form>
                )}
            </Formik>
        );
    }
}

export default Form;
