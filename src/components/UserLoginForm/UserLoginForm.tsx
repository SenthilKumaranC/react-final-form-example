import { FORM_ERROR } from "final-form";
import { useCallback } from "react";
import { Form, FormRenderProps } from "react-final-form";
import UserLoginHtmlForm from "./UserLoginHTMLForm";


export interface IUserFormState {
    username: string;
    password: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const onSubmit = async (values: IUserFormState) => {
    await sleep(3000);
    if (values.username !== "Bharti") {
        console.log("submit")
        return { [FORM_ERROR]: "Unknown username" };
    }
    window.alert("LOGIN SUCCESS!");
};


const UserLoginForm = () => {

    const formRenderCallback = useCallback((props: FormRenderProps<any, Partial<any>>) => {
        return <UserLoginHtmlForm {...props}></UserLoginHtmlForm>
    }, [])

    return <>
        <Form
            onSubmit={onSubmit}
            render={formRenderCallback}
        >
        </Form>
    </>
}

export default UserLoginForm