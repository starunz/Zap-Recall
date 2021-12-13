import Topbar from "./Topbar";
import { useState} from "react";
import { deck } from "./Deck";
import NextFlashcard from "./NextFlashcard";
import RenderResultCard from "./RenderResultCard";

import {     
    CardContainer,
    FlashCard,
    CardCaunter,
    CardText,
    Footer,
} from "./StyledCard"

import OptionsAnswers from "./OptionsAnswers";

export default function CardAnswer({colorChange, setColorChange, changeShadow, setChangeShadow, changeId, setChangeId, flashcardExchange, setFlashcardExchange, savedAnswer, setSavedAnswer, endGame, setEndGame,changeResult, setChangeResult}) {

    const [sumir, setSumir] = useState(false);

    const flashcardAnswer = deck.filter( (answer) => answer.id === changeId)

    return(
        endGame ? <RenderResultCard savedAnswer={savedAnswer} changeResult={changeResult} setChangeResult={setChangeResult}/> :
        <>
        <Topbar />
        <CardContainer>
            <FlashCard borderColor={colorChange} shadowColor={changeShadow} >
                <CardCaunter>
                   <h1>{flashcardAnswer[0].question}</h1> <span>{changeId}/{deck.length}</span>
                </CardCaunter>

                <CardText>
                    {flashcardAnswer.map( (flashcard, index) => <h2 key={index}> {flashcard.answer} </h2>)}
                </CardText>

                <Footer>
                    { sumir ? 
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
                    <OptionsAnswers  setColorChange={setColorChange} setChangeShadow={setChangeShadow} setSumir={setSumir} savedAnswer={savedAnswer} setSavedAnswer={setSavedAnswer} />
                    }
                </Footer>

            </FlashCard>

        </CardContainer>
        </> 
    );
}