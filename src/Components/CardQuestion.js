import Topbar from "./Topbar";
import { deck } from "./Deck";
import NextFlashcard from "./NextFlashcard";

import {     
    CardContainer,
    FlashCard,
    CardCaunter,
    CardText,
    Footer,
} from "./StyledCard"


export default function CardQuestion({setStart, start ,mudarCor, mudarSombra, mudarId, setMudarId}) {

    const flashcardQuestion = deck.filter( (question) => question.id === mudarId)

    return(
        <>
            <Topbar />
            <CardContainer>
                <FlashCard borderColor={mudarCor} shadowColor={mudarSombra}>
                    <CardCaunter>
                        <span>{mudarId}/{deck.length}</span>
                    </CardCaunter>

                    <CardText>
                        {flashcardQuestion.map( (flashcard, index) => <p key={index} > {flashcard.question} </p>) }
                    </CardText>

                    <Footer>
                        <NextFlashcard setStart={setStart} start={start}/>
                    </Footer>
                </FlashCard>

            </CardContainer>
        </>
    );
}