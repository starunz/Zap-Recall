import Topbar from "./Topbar";
import { useState} from "react";
import { deck } from "./Deck";
import NextFlashcard from "./NextFlashcard";
import CardFinal from "./CardFinal";

import {     
    CardContainer,
    FlashCard,
    CardCaunter,
    CardText,
    Footer,
} from "./StyledCard"

import OptionsAnswers from "./OptionsAnswers";

export default function CardAnswer({mudarCor, setMudarCor, mudarSombra, setMudarSombra, mudarId, setMudarId, setStart, start, guardar, setGuardar, final, setFinal,finalTrocar, setFinalTrocar}) {
    console.log(guardar)

    const [sumir, setSumir] = useState(false);

    const flashcardAnswer = deck.filter( (answer) => answer.id === mudarId)

    return(
        final ? <CardFinal guardar={guardar} finalTrocar={finalTrocar} setFinalTrocar={setFinalTrocar}/> :
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
                    <NextFlashcard 
                        mudarId={mudarId} 
                        setMudarId={setMudarId} 
                        setStart={setStart} 
                        start={start} 
                        guardar={guardar} 
                        setGuardar={setGuardar}
                        final={final}
                        setFinal={setFinal}
                        finalTrocar={finalTrocar}
                        setFinalTrocar={setFinalTrocar}
                    />
                    : 
                    <OptionsAnswers  setMudarCor={setMudarCor} setMudarSombra={setMudarSombra} setSumir={setSumir} guardar={guardar} setGuardar={setGuardar} />
                    }
                </Footer>

            </FlashCard>

        </CardContainer>
        </> 
    );
}