import Topbar from "./Topbar";
import { deck } from "./Deck";
import NextFlashcard from "./NextFlashcard";

import {     
    CardContainer,
    FlashCard,
    CardCaunter,
    CardText,
    Footer,
} from "./StyledCard"


export default function CardQuestion({setStart, start ,mudarCor, mudarSombra, mudarId, setMudarId, guardar, setGuardar, final, setFinal,finalTrocar, setFinalTrocar}) {

    const flashcardQuestion = deck.filter( (question) => question.id === mudarId)

    return(
        <>
            <Topbar />
            <CardContainer>
                <FlashCard borderColor={mudarCor} shadowColor={mudarSombra}>
                    <CardCaunter>
                        <span>{mudarId}/{deck.length}</span>
                    </CardCaunter>

                    <CardText>
                        {flashcardQuestion.map( (flashcard, index) => <h1 key={index} > {flashcard.question} </h1>) }
                    </CardText>

                    <Footer>
                        <NextFlashcard setStart={setStart} start={start} guardar={guardar} setGuardar={setGuardar} final={final} setFinal={setFinal} finalTrocar={finalTrocar}setFinalTrocar={setFinalTrocar}/>
                    </Footer>
                </FlashCard>

            </CardContainer>
        </>
    );
}