import { deck } from "./Deck";

export default function NextFlashcard({start, setStart, mudarId, setMudarId, guardar, setFinal, setFinalTrocar}) {

    function trocarCard() {
        setStart(true);

        if (guardar.length === deck.length) {
            setFinal(true);
            
            if (guardar.includes(false)) {
                setFinalTrocar(true);
            }
        }
        else if(start === true){
            setStart(false);
            setMudarId(mudarId + 1);
            return;
        }
    }

    return(
        <>
            <img onClick={trocarCard}  src="./assets/turn.png" alt="turn" />
        </>
    );
}