import { deckReact } from "./Deck";

export default function NextFlashcard({flashcardExchange, setFlashcardExchange, changeId, setChangeId, savedAnswer, setEndGame, setChangeResult}) {

    function changeStates() {
        setFlashcardExchange(true);

        if(savedAnswer.length === deckReact.length) {
            setEndGame(true);
            
            if(savedAnswer.includes(false)) {
                setChangeResult(true);
            }
        }
        else if(flashcardExchange === true){
            setFlashcardExchange(false);
            setChangeId(changeId + 1);
            return;
        }
    }

    return(
        <>
            <img onClick={changeStates}  src="./assets/turn.png" alt="turn" />
        </>
    );
}