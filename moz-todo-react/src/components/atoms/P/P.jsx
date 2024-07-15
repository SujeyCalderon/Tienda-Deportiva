import React, { Children } from "react";

const P =({className, children})=>{
    return(
        <p className={className}>{children}</p>
    );
}
export default P;