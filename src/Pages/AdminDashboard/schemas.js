import * as Yup from 'yup';

export const initialValues = {
  nombre:"",
  descripcion:"",
  categoria:"",
  precio: "",
  decimales:"",
  moneda:"",
  estado:"",
  es_nuevo:"",
  fecha_de_alta:"",
};

export const validationSchema = {
  //   username: Yup.string().required('El campo Admin username es obligatorio'),
  //   password: Yup.string().required('El campo Password es obligatorio'),
  nombre: Yup.string().required('El campo nombre es obligatorio'),
  descripcion: Yup.string().required('El campo nombre es obligatorio'),
  categoria: Yup.string().required('El campo categoria es obligatorio'),
  precio: Yup.string().required('El campo precio es obligatorio'), // Se va a guardar como number en la db, pero para validarlo es texto (por las comas)
  decimales: Yup.string(),
  moneda: Yup.string().required('El campo moneda es obligatorio'),
  estado: Yup.string().required('El campo estado es obligatorio'),
  es_nuevo: Yup.bool().required('El campo es nuevo es obligatorio'),
  fecha_de_alta: Yup.string().required('El campo fecha de alta es obligatorio')
};
