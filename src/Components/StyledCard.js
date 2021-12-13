import styled from "styled-components";

const CardContainer = styled.div `
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
`
const FlashCard = styled.div `
    width: 27%;
    height: 575.75px;

    margin-top: 100px;

    word-break: break-all;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: #FFFFFF;
    box-shadow: 0px 8px 24px ${(props) => props.shadowColor};
    border: 3px solid ${(props) => props.borderColor};
    border-radius: 12px;
`

const CardCaunter = styled.div `
    width: 100%;

    display: flex;
    justify-content: space-between ;

    background-color: violet;

    position: relative;

    span {
        position: absolute;
        right:10px ;
        top: 10px;

        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.1em;
    }
`
const CardText = styled.div ` 
    width: 50%;

    background-color: turquoise;
`
const Footer = styled.div `
    width: 100%;

    //display: flex;
    //justify-content: space-between;

    //background-color: tomato;

    position: relative;

    img {
        position: absolute;
        bottom: 10px;
        right: 10px;

        width: 12%;
    }
`
const Options = styled.div `
    width: 90%;

    margin: 20px auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Option = styled.button `
    width: 22%;
    height: 50px;

    border: 3px solid ${(props) => props.borderColor};
    box-sizing: border-box;
    border-radius: 12px;

    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
 
    cursor: pointer;
    &:hover {
        filter: brightness(0.9);
    }
    &:active {
        transform: scale(0.90);
        transition: 1s;
    }
`

const Sucess = styled.div `
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction:  column;
    align-items:center;

    margin-top: 300px;

    h1{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 26px;
    }
`

const Failure = styled.div `
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction:  column;
    align-items:center;

    margin-top: 300px;

    h1{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 26px;
        text-align: center;
    }
`
export {
    CardContainer,
    FlashCard,
    CardCaunter,
    CardText,
    Footer,
    Options,
    Option,
    Sucess,
    Failure,
}