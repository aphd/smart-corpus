import * as Yup from "yup";

const cueFormValidation = Yup.object().shape({
    licence: Yup.string()
        .min(3, "Must have at least 3 values")
        .required("Must enter a value")
});

export default cueFormValidation;
