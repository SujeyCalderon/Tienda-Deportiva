import React from "react";

const Input = ({ className, type, id, name, value }) => {
    return (
        <input className={className} type={type} id={id} name={name} value={value} />
    );
}

export default Input;
