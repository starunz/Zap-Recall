import { useState } from "react";
import CardQuestion from "./CardQuestion";
import RenderEndGame from "./RenderEndGame";

export default function RenderFlashcard() {

    const [flashcardExchange, setFlashcardExchange] = useState(false);
    const [colorChange, setColorChange] = useState('#FFFFFF');
    const [changeShadow, setChangeShadow] = useState('rgba(0, 0, 0, 0.12)');
    const [changeId, setChangeId] = useState(1);
    const [savedAnswer, setSavedAnswer] = useState([]);
    const [endGame, setEndGame] = useState(false);
    const [changeResult, setChangeResult] = useState(false)

    return(
        flashcardExchange ? 
        <RenderEndGame
            flashcardExchange={flashcardExchange} 
            setFlashcardExchange={setFlashcardExchange} 
            colorChange={colorChange} 
            setColorChange={setColorChange} 
            changeShadow={changeShadow} 
            setChangeShadow={setChangeShadow} 
            changeId={changeId} 
            setChangeId={setChangeId}
            savedAnswer={savedAnswer}
            setSavedAnswer={setSavedAnswer}
            endGame={endGame}
            setEndGame={setEndGame}
            changeResult={changeResult}
            setChangeResult={setChangeResult}
        /> 
        : 
        <CardQuestion 
            flashcardExchange={flashcardExchange} 
            setFlashcardExchange={setFlashcardExchange} 
            colorChange={colorChange} 
            changeShadow={changeShadow} 
            changeId={changeId} 
            setChangeId={setChangeId} 
            savedAnswer={savedAnswer}
            setSavedAnswer={setSavedAnswer}
            endGame={endGame}
            setEndGame={setEndGame}
            changeResult={changeResult}
            setChangeResult={setChangeResult}
        />
    );
}