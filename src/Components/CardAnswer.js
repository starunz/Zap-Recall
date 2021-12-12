import Topbar from "./Topbar";
import { useState} from "react";
import { deck } from "./Deck";
import NextFlashcard from "./NextFlashcard";

import {     
    CardContainer,
    FlashCard,
    CardCaunter,
    CardText,
    Footer,
} from "./StyledCard"

import OptionsAnswers from "./OptionsAnswers";

export default function CardAnswer({mudarCor, setMudarCor, mudarSombra, setMudarSombra, mudarId, setMudarId, setStart, start}) {
//const [...inicio, true]

    const [sumir, setSumir] = useState(false);

    const flashcardAnswer = deck.filter( (answer) => answer.id === mudarId)



    return(
        <>
        <Topbar />
        <CardContainer>
            <FlashCard borderColor={mudarCor} shadowColor={mudarSombra} >
                <CardCaunter>
                    <span>{mudarId}/{deck.length}</span>
                </CardCaunter>

                <CardText>
                    {flashcardAnswer.map( (flashcard, index) => <p key={index}> {flashcard.answer} </p>)}
                </CardText>

                <Footer>
                    { sumir ? 
                    <NextFlashcard mudarId={mudarId} setMudarId={setMudarId} setStart={setStart} start={start}/>
                    : 
                    <OptionsAnswers  setMudarCor={setMudarCor} setMudarSombra={setMudarSombra} setSumir={setSumir}/>
                    }
                </Footer>

            </FlashCard>

        </CardContainer>
        </>
    );
}