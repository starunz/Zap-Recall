
import Sucesso from "./CardSucesso";
import Erro from "./Fracasso";

export default function CardFinal({finalTrocar}) {

    return(
       finalTrocar ? < Erro /> : <Sucesso />
    );
}