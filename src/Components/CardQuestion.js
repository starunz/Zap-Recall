import Topbar from "./Topbar";
import { useState } from "react";
import { deck } from "./Deck";

import {     
    CardContainer,
    FlashCard,
    CardCaunter,
    CardText,
    Footer,
} from "./StyledCard"


export default function CardQuestion({ start, setStart, mudarCor, mudarSombra}) {
    //const [start, setStart] = useState(false);

    const flashcardQuestion = deck.filter( (question) => question.id === 1)

    return(
        <>
            <Topbar />
            <CardContainer>
                <FlashCard borderColor={mudarCor} shadowColor={mudarSombra}>
                    <CardCaunter>
                        <span>1/{deck.length}</span>
                    </CardCaunter>

                    <CardText>
                        {flashcardQuestion.map( (flashcard, index) => <p key={index} > {flashcard.question} </p>) }
                    </CardText>

                    <Footer>
                        <img onClick={() => setStart(true)}  src="./assets/turn.png" alt="turn" />
                    </Footer>
                </FlashCard>

            </CardContainer>
        </>
    );
}