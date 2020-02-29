import * as Yup from "yup";

const cueFormValidation = Yup.object().shape({
    Type: Yup.string().when("*", {
        is: true,
        then: () => {},
        otherwise: () => {}
    })
});

export default cueFormValidation;
