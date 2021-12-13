import { Sucess, CardContainer} from './StyledCard'
import Topbar from './Topbar'

export default function Sucesso() {
    return(
        <> 
            <Topbar />
            <CardContainer>

                <Sucess>
                    <h1>PARABÉNS! <img src='../assets/party.png' alt='party' /> </h1> 
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </Sucess>
            </CardContainer>
        </>
    )
}