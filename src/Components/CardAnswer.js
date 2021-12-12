import Topbar from "./Topbar";
import { useState} from "react";
import { deck } from "./Deck";

import {     
    CardContainer,
    FlashCard,
    CardCaunter,
    CardText,
    Footer,
    Options,
    Option
} from "./StyledCard"

import OptionsAnswers from "./OptionsAnswers";

export default function CardAnswer({mudarCor, setMudarCor, mudarSombra, setMudarSombra}) {
//const [...inicio, true]

    const flashcardAnswer = deck.filter( (answer) => answer.id === 1)

    return(
        <>
        <Topbar />
        <CardContainer>
            <FlashCard borderColor={mudarCor} shadowColor={mudarSombra} >
                <CardCaunter>
                    <span>1/{deck.length}</span>
                </CardCaunter>

                <CardText>
                    {flashcardAnswer.map( (flashcard, index) => <p key={index}> {flashcard.answer} </p>)}
                </CardText>

                <Footer>
                    <OptionsAnswers  setMudarCor={setMudarCor} setMudarSombra={setMudarSombra}/>
                </Footer>

            </FlashCard>

        </CardContainer>
        </>
    );
}