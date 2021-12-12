//import Topbar from "./Topbar";
import { useState } from "react";
import CardAnswer from "./CardAnswer";
import CardQuestion from "./CardQuestion";
//import { Deck } from "./Deck";


export default function Card() {

    const [start, setStart] = useState(false);
    const [mudarCor , setMudarCor] = useState('#FFFFFF');
    const [mudarSombra, setMudarSombra] = useState ('rgba(0, 0, 0, 0.12)');
    //useState pra contrar o id começando com 1 pq é quqndo começa 

    return(
        start ? 
        <CardAnswer mudarCor={mudarCor} setMudarCor={setMudarCor} mudarSombra={mudarSombra} setMudarSombra={setMudarSombra}/> 
        : 
        <CardQuestion start={start} setStart={setStart} mudarCor={mudarCor} mudarSombra={mudarSombra}/>
    );
}