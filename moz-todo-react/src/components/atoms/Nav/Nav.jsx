import React from "react";

const Nav = ({ className, id, children }) => {
    return (
        <nav className={className} id={id}>{children}</nav>
    );
}

export default Nav;
