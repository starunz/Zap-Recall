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


export default function CardQuestion({setFlashcardExchange, flashcardExchange ,colorChange, changeShadow, changeId, savedAnswer, setSavedAnswer, endGame, setEndGame,finalTrocar, setFinalTrocar}) {

    const flashcardQuestion = deck.filter( (question) => question.id === changeId)

    return(
        <>
            <Topbar />
            <CardContainer>
                <FlashCard borderColor={colorChange} shadowColor={changeShadow}>
                    <CardCaunter>
                        <span>{changeId}/{deck.length}</span>
                    </CardCaunter>

                    <CardText>
                        {flashcardQuestion.map( (flashcard, index) => <h1 key={index} > {flashcard.question} </h1>) }
                    </CardText>

                    <Footer>
                        <NextFlashcard setFlashcardExchange={setFlashcardExchange} flashcardExchange={flashcardExchange} savedAnswer={savedAnswer} setSavedAnswer={setSavedAnswer} endGame={endGame} setEndGame={setEndGame} finalTrocar={finalTrocar}setFinalTrocar={setFinalTrocar}/>
                    </Footer>
                </FlashCard>

            </CardContainer>
        </>
    );
}