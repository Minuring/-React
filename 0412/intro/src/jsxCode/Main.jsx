import React from "react";
import InfoBlock from "./InfoBlock";
import InfoArticle from "./InfoArticle";

function Main(props) {

    const color = props.color;

    const sectionStyle = {
        width : "100%",
        height : "80%",
        paddingTop : "5%",
        paddingBottom: "5%",
        backgroundColor: color.blockBG,
        borderRadius : "20px 20px 20px 20px"
    };
    const texts = "유능한 개발자가 되고싶은 사람입니다 !";
    
    return (
        <section style={sectionStyle}>
            <InfoBlock />
            <InfoArticle color={props.color} content={texts}/>
        </section>
    )
}

export default Main;