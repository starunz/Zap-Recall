import { useState } from "react";
import CardAnswer from "./CardAnswer";
import RenderResultCard from "./RenderResultCard";

export default function RenderEndGame({endGame, setEndGame, colorChange, setColorChange, changeShadow, setChangeShadow, changeId, setChangeId, flashcardExchange, setFlashcardExchange, savedAnswer, setSavedAnswer,changeResult, setChangeResult}) {
    const [hidden, setHidden] = useState(false);
    
    return(
        endGame ? 
        <RenderResultCard 
            savedAnswer={savedAnswer} 
            changeResult={changeResult} 
            setChangeResult={setChangeResult}
        /> 
        :
        <CardAnswer 
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
            colorChange={colorChange}
            setColorChange={setColorChange} 
            changeShadow={changeShadow}
            setChangeShadow={setChangeShadow} 
            setHidden={setHidden} 
            hidden={hidden}
        />
    );
}