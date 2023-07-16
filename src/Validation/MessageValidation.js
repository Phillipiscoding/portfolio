import * as yup from "yup";

export const messageSchema = yup.object().shape({
    from_name: yup.string().required(),
    from_email: yup.string().email().required(),
    message: yup.string().required(),
});