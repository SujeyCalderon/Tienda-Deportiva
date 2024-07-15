import React, { Children } from "react";

const H5 = ({className, children})=>{
    return (
        <h5 className={className}>{children}</h5>
    );
}
export default H5;