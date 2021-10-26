import React from "react";
import { Field } from "react-final-form";
import { requiredValidator } from "../../../utilities/formValidators/required.validator.";

const UsernameField = () => {
   return <Field name="username" component="input" validate={requiredValidator}></Field>
}

export default UsernameField