import { useState } from "react";
import CardAnswer from "./CardAnswer";
import CardQuestion from "./CardQuestion";

export default function Card() {

    const [start, setStart] = useState(false);
    const [mudarCor, setMudarCor] = useState('#FFFFFF');
    const [mudarSombra, setMudarSombra] = useState('rgba(0, 0, 0, 0.12)');
    const [mudarId, setMudarId] = useState(1);
    const [guardar, setGuardar] = useState([]);
    const [final, setFinal] = useState(false);
    const [finalTrocar, setFinalTrocar] = useState(false)
    console.log(guardar);


    return(
        start ? 
        <CardAnswer 
            start={start} 
            setStart={setStart} 
            mudarCor={mudarCor} 
            setMudarCor={setMudarCor} 
            mudarSombra={mudarSombra} 
            setMudarSombra={setMudarSombra} 
            mudarId={mudarId} 
            setMudarId={setMudarId}
            guardar={guardar}
            setGuardar={setGuardar}
            final={final}
            setFinal={setFinal}
            finalTrocar={finalTrocar}
            setFinalTrocar={setFinalTrocar}
        /> 
        : 
        <CardQuestion 
            start={start} 
            setStart={setStart} 
            mudarCor={mudarCor} 
            mudarSombra={mudarSombra} 
            mudarId={mudarId} 
            setMudarId={setMudarId} 
            guardar={guardar}
            setGuardar={setGuardar}
            final={final}
            setFinal={setFinal}
            finalTrocar={finalTrocar}
            setFinalTrocar={setFinalTrocar}
        />
    );
}