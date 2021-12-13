import Topbar from './Topbar'
import { ContainerSucess, Sucess, CardContainer} from './StyledCard'

export default function CardSuccess() {
    
    return(
        <> 
            <Topbar />
            <CardContainer>

                <ContainerSucess>
                    <Sucess>
                        <h1>PARABÉNS!</h1> 
                        <img src='../assets/party.png' alt='party' /> 
                    </Sucess>
                    
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </ContainerSucess>
            </CardContainer>
        </>
    )
}