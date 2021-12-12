export default function NextFlashcard({start ,setStart,mudarId,setMudarId}) {
    function trocarCard() {

        setStart(true);
        if(start === true){
            setStart(false);
            setMudarId(mudarId + 1)
        }

    }
    
    return(
        <>
            <img onClick={trocarCard}  src="./assets/turn.png" alt="turn" />
        </>
    );
}