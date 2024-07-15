import React from "react";

const Button = ({ className, id, contenido }) => {
    return (
        <button className={className} id={id}>{contenido}</button>
    );
}

export default Button;
