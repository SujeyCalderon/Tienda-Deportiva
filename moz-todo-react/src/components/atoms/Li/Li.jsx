import React from "react";

const Li = ({ className, id, children }) => {
    return (
        <li className={className} id={id}>{children}</li>
    );
}

export default Li;
