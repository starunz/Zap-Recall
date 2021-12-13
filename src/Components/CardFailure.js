import Topbar from "./Topbar";
import { CardContainer, ContainerFailure ,Failure } from "./StyledCard";

export default function CardFailure() {
    
    return(
        <>
            <Topbar />
            <CardContainer>
                <ContainerFailure>
                    <Failure>
                        <h1>Putz... </h1>
                        <img src='../assets/sad.png' alt='sad' />
                    </Failure>

                    <p>Você esqueceu alguns flashcards... <br/> Não desanime! Na próxima você consegue!</p>
                </ContainerFailure>
            </CardContainer>
        </>
    );
}