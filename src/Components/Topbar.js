import styled from "styled-components";

export default function Topbar() {
    return(
        <Top>
            <img src="./assets/logo-mini.png" alt="logotop"/>
        </Top>
    );
}

const Top = styled.div `
    width: 100%;

    img {
        width: 141px;
        height: 54px;

        margin: 20px 0 0 20px;
    }
`