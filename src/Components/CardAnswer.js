import Topbar from "./Topbar";
import NextFlashcard from "./NextFlashcard";
import OptionsAnswers from "./OptionsAnswers";
import { deckReact } from "./Deck";

import {     
    CardContainer,
    FlashCard,
    CardCaunter,
    CardText,
    Footer,
} from "./StyledCard"

export default function CardAnswer({hidden, setHidden ,colorChange, setColorChange, changeShadow, setChangeShadow, changeId, setChangeId, flashcardExchange, setFlashcardExchange, savedAnswer, setSavedAnswer, endGame, setEndGame,changeResult, setChangeResult}) {

    const flashcardAnswer = deckReact.filter( (answer) => answer.id === changeId)

    return(
        <>
        <Topbar />
        <CardContainer>
            <FlashCard borderColor={colorChange} shadowColor={changeShadow} >
                <CardCaunter>
                   <h1>{flashcardAnswer[0].question}</h1> <span>{changeId}/{deckReact.length}</span>
                </CardCaunter>

                <CardText>
                    {flashcardAnswer.map( (flashcard, index) => <h2 key={index}> {flashcard.answer} </h2>)}
                </CardText>

                <Footer>
                    { hidden ? 
                    <NextFlashcard 
                        changeId={changeId} 
                        setChangeId={setChangeId} 
                        flashcardExchange={flashcardExchange} 
                        setFlashcardExchange={setFlashcardExchange} 
                        savedAnswer={savedAnswer} 
                        setSavedAnswer={setSavedAnswer}
                        endGame={endGame}
                        setEndGame={setEndGame}
                        changeResult={changeResult}
                        setChangeResult={setChangeResult}
                    />
                    : 
                    <OptionsAnswers  
                        setColorChange={setColorChange} 
                        setChangeShadow={setChangeShadow} 
                        setHidden={setHidden} 
                        savedAnswer={savedAnswer} 
                        setSavedAnswer={setSavedAnswer} 
                    />
                    }
                </Footer>

            </FlashCard>

        </CardContainer>
        </> 
    );
}