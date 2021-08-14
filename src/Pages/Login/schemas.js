import * as Yup from 'yup';

export const initialValues = {
    username: "",
    password: "",
}

export const validationSchema = {
    username: Yup.string().required("El campo Admin username es obligatorio"),
    password: Yup.string().required("El campo Password es obligatorio"),
}
