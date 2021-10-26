import React from "react";
import { FormRenderProps } from "react-final-form";
import UsernameField from "./Fields/UsernameField";
import UserPasswordField from "./Fields/UserPasswordField";
import UserFormSubmitButton from "./UserFormSubmitButton";
import './UserLoginHtmlForm.css'

const UserLoginHtmlForm = (props: FormRenderProps<any, Partial<any>>) => {
    const { handleSubmit, errors, touched, submitError, submitting } = props;

    console.log(submitError);

    return <form className="UserLoginHtmlForm" onSubmit={handleSubmit}>
        <UsernameField ></UsernameField>
        {errors && touched?.username && <div style={{ color: "red" }}>{errors?.username?.toString()}</div>}
        <UserPasswordField ></UserPasswordField>
        <UserFormSubmitButton {...props}></UserFormSubmitButton>
        {submitting && <div>Verifying the userdata</div>}
        {submitError && <div style={{ color: "blue" }}>{submitError}</div>}
    </form>
}

export default UserLoginHtmlForm