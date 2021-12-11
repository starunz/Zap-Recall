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


export default function CardQuestion({ start, setStart}) {
    //const [start, setStart] = useState(false);

    const flashcardQuestion = deck.filter( (card) => card.id === 1)

    return(
        <>
            <Topbar />
            <CardContainer>
                <FlashCard>
                    <CardCaunter>
                        <span>1/{deck.length}</span>
                    </CardCaunter>

                    <CardText>
                        {flashcardQuestion.map( (flashcardQuestion, index) => <p key={index} > {flashcardQuestion.question} </p>) }
                    </CardText>

                    <Footer>
                        <img onClick={() => setStart(true)}  src="./assets/turn.png" alt="turn" />
                    </Footer>
                </FlashCard>

            </CardContainer>
        </>
    );
}