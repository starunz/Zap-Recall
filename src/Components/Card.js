//import Topbar from "./Topbar";
import { useState } from "react";
import CardAnswer from "./CardAnswer";
import CardQuestion from "./CardQuestion";
//import { Deck } from "./Deck";


export default function Card() {

    const [start, setStart] = useState(false);
    const [mudarCor , setMudarCor] = useState('#FFFFFF');
    const [mudarSombra, setMudarSombra] = useState ('rgba(0, 0, 0, 0.12)');
    const [mudarId, setMudarId] = useState (1);
    //useState pra contrar o id começando com 1 pq é quqndo começa 

    return(
        start ? 
        <CardAnswer start={start} setStart={setStart} mudarCor={mudarCor} setMudarCor={setMudarCor} mudarSombra={mudarSombra} setMudarSombra={setMudarSombra} mudarId={mudarId} setMudarId={setMudarId}/> 
        : 
        <CardQuestion start={start} setStart={setStart} mudarCor={mudarCor} mudarSombra={mudarSombra} mudarId={mudarId} setMudarId={setMudarId} />
    );
}