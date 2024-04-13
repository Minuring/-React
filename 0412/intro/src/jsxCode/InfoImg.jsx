import React from "react";

function InfoImg(props) {
    const style = {
        width : "100%",
        borderRadius: "20%",
        borderWidth: "2.5px",
        borderStyle: "groove",
        borderColor: "black"
    };
    return (
        <img src={"img/"+props.src} alt={props.src} style={style}></img>
    )
}
export default InfoImg;