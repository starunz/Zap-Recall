import { useState } from "react";
import CardAnswer from "./CardAnswer";
import CardQuestion from "./CardQuestion";

export default function RenderFlashcard() {

    const [flashcardExchange, setFlashcardExchange] = useState(false);
    const [colorChange, setColorChange] = useState('#FFFFFF');
    const [changeShadow, setChangeShadow] = useState('rgba(0, 0, 0, 0.12)');
    const [changeId, setChangeId] = useState(1);
    const [savedAnswer, setSavedAnswer] = useState([]);
    const [endGame, setEndGame] = useState(false);
    const [finalTrocar, setFinalTrocar] = useState(false)



    return(
        flashcardExchange ? 
        <CardAnswer 
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
            finalTrocar={finalTrocar}
            setFinalTrocar={setFinalTrocar}
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
            finalTrocar={finalTrocar}
            setFinalTrocar={setFinalTrocar}
        />
    );
}