import React from "react";

const FieldError = ({ error, touched }: any) => {
    return <>{error && touched && <div style={{color:"red",fontSize:"10px",fontWeight:600}}>{error}</div>}</>
}
export default FieldError