import React from "react";
import Timer from "./Timer.jsx";

function Header(props) {
    const color = props.color;
    const style = {
            backgroundColor : color.textBG,
            textAlign : "center",
            margin : "5% 5% 10% 5%",
            padding : "5px 5px 5px 5px",
            borderRadius : "20px 20px 20px 20px"
    };
    return (
        <div>
            <header style={style}>
                <h1>자기소개</h1>
                <Timer color={props.color}/>
            </header>
        </div>
    )
}
export default Header;