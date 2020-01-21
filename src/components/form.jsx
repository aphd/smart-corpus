import React, { Component } from "react";
import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core";

class Form extends Component {
    render() {
        return (
            <Formik
                initialValues={{ firstName: "Bob" }}
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
                        <TextField
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
