import React from 'react';
import {styled} from "@mui/system";

const Footer = () => {
    return (
        <MyFooter>
            <span>© 2022-2023 FC Fuerza武雄</span>
        </MyFooter>
    );
}

export default Footer

const MyFooter = styled("footer")({
    textAlign: "center",
    color:"#ebf6f7",
    backgroundColor: "#005a0b",
    width: "100%",
    //position: "absolute",
    bottom: 0,
    display:"block",
    position:"fixed",
    zIndex:1000,
});