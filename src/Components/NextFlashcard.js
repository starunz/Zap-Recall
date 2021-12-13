import { deck } from "./Deck";

export default function NextFlashcard({flashcardExchange, setFlashcardExchange, changeId, setChangeId, savedAnswer, setEndGame, setFinalTrocar}) {

    function trocarCard() {
        setFlashcardExchange(true);

        if (savedAnswer.length === deck.length) {
            setEndGame(true);
            
            if (savedAnswer.includes(false)) {
                setFinalTrocar(true);
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
            <img onClick={trocarCard}  src="./assets/turn.png" alt="turn" />
        </>
    );
}