//import Topbar from "./Topbar";
import { useState } from "react";
import CardAnswer from "./CardAnswer";
import CardQuestion from "./CardQuestion";
//import { Deck } from "./Deck";


export default function Card() {

    const [start, setStart] = useState(false);
    //useState pra contrar o id começando com 1 pq é quqndo começa 

    return(
        start ? <CardAnswer /> : <CardQuestion start={start} setStart={setStart}/>
    );


}