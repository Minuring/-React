import React from "react";
import dpTime from "./dpTime.jsx";

function Header() {
    const style = {
            backgroundColor : "skyblue",
            textAlign : "center",
            margin : "5% 5% 10% 5%",
            padding : "5px 5px 5px 5px",
            borderRadius : "20px 20px 20px 20px"
    };
    return (
        <div>
            <header style={style}>
                <h1>자기소개</h1>
                {dpTime()}
            </header>
        </div>
    )
}
export default Header;