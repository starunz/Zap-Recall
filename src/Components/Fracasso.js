import Topbar from "./Topbar";
import { CardContainer, Failure } from "./StyledCard";

export default function Erro() {
    
    return(
        <>
            <Topbar />
            <CardContainer>
                <Failure>
                    <h1>Putz.. <img src='../assets/sad.png' alt='sad' /></h1>
                    <p>Você esqueceu alguns flashcards... <br/> Não desanime! Na próxima você consegue!</p>
                </Failure>
            </CardContainer>
        </>
    );
}