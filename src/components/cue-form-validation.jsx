import * as Yup from "yup";

const cueFormValidation = Yup.object().shape({
    CV: Yup.string().required("Must enter a value")
});

export default cueFormValidation;
