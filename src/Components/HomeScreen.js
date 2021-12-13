import { Container, Start } from "./StyledHomeScreen";

export default function HomeScreen({setStart}) {

    return (
        <Container>
            <img src="./assets/logo.png" alt="logo"/>
            <Start onClick={ () => setStart(true) } data-identifier="start-zap-recall"> 
                <span>Praticar React </span>
                <img src="./assets/next.png" alt="next"/> 
            </Start>
        </Container>
    );
}