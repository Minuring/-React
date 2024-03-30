import React from "react";
import dpTime from "./dpTime";

function Header() {
    return (
        <header>
            <h1>자기소개</h1>
            {dpTime()}
        </header>
    )
}
export default Header;