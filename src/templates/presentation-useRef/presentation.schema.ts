import * as yup from "yup"

export const schema = yup
  .object()
  .shape({
    firstName: yup
      .string(),
    lastName: yup
      .string()
  })
  .required()
