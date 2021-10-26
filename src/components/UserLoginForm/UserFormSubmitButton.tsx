import React from "react";
import { FormRenderProps } from "react-final-form";

const UserFormSubmitButton = (props: FormRenderProps<any, Partial<any>>) => {

    const { submitting, pristine , invalid} = props;

    return <button type="submit" disabled={submitting || pristine || invalid}>
        Submit
    </button>
}

export default UserFormSubmitButton