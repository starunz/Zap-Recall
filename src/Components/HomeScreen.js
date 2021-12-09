import styled from "styled-components";
import { useState } from "react";

import Topbar from "./Topbar";


export default function HomeScreen() {
    const [start, setStart] = useState(false);

    return (
        start ? <Topbar /> : 
        <Container>
            <img src="./assets/logo.png" alt="logo"/>
            <Start onClick={ () => setStart(true) }> 
                <span>Praticar React </span>
                <img src="./assets/next.png" alt="next"/> 
            </Start>
        </Container>
    );
}

const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 12%;
        margin-top: 150px;
    }
`
const Start = styled.button `
    width: 345px;
    height: 72px;

    margin-top: 200px;

    background-color: white;

    border: 3px solid #FFEF61;
    box-sizing: border-box;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    &:hover {
        filter: brightness(0.9);

    }
    &:active {
        transform: scale(0.90);
        transition: 1s;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
        line-height: 23,44px;
        margin-right: 4px;
    }

    img {
        margin:0;
        width: 9%;
    }
`