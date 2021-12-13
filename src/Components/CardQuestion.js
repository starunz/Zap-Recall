import Topbar from "./Topbar";
import NextFlashcard from "./NextFlashcard";
import { deckReact } from "./Deck";

import {     
    CardContainer,
    FlashCard,
    CardCaunter,
    CardText,
    Footer,
} from "./StyledCard"


export default function CardQuestion({setFlashcardExchange, flashcardExchange, colorChange, changeShadow, changeId, savedAnswer, setSavedAnswer, endGame, setEndGame, changeResult, setChangeResult}) {

    const flashcardQuestion = deckReact.filter( (question) => question.id === changeId)

    return(
        <>
            <Topbar />
            <CardContainer>
                <FlashCard borderColor={colorChange} shadowColor={changeShadow}>
                    <CardCaunter>
                        <span>{changeId}/{deckReact.length}</span>
                    </CardCaunter>

                    <CardText>
                        {flashcardQuestion.map( (flashcard, index) => <h1 key={index} > {flashcard.question} </h1>) }
                    </CardText>

                    <Footer>
                        <NextFlashcard 
                            flashcardExchange={flashcardExchange} 
                            setFlashcardExchange={setFlashcardExchange} 
                            savedAnswer={savedAnswer} 
                            setSavedAnswer={setSavedAnswer} 
                            endGame={endGame} 
                            setEndGame={setEndGame} 
                            changeResult={changeResult} 
                            setChangeResult={setChangeResult}
                        />
                    </Footer>
                </FlashCard>

            </CardContainer>
        </>
    );
}