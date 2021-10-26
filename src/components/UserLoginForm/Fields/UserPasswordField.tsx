import { useCallback } from "react";
import { Field } from "react-final-form";
import { composeValidators } from "../../../utilities/formValidators/compose.validator";
import { passwordValidator } from "../../../utilities/formValidators/password.validator";
import { requiredValidator } from "../../../utilities/formValidators/required.validator.";
import FieldError from "../FieldErrors/FieldError";

const PasswordInput = ({ input, meta }: any) => {
   const { error, touched } = meta;
   return (
      <div style={{
         display: "grid",
         gridTemplateRows: `${error && touched ? "80% 20%" : "100%"}`
      }}>
         <input  {...input} style={{ border: `${error && touched ? "#ff0000 2px solid" : "#000000 0.5px solid"}` }}></input>
         <FieldError {...meta} ></FieldError>
      </div>
   )
}

const UserPasswordField = () => {

   const contructInputComponent = useCallback(props => {
      return <PasswordInput {...props} ></PasswordInput>
   }, []);

   return <Field name="password"
      validate={composeValidators(requiredValidator, passwordValidator)} render={contructInputComponent}
 
      ></Field>
}

export default UserPasswordField