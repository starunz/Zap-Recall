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
    //fazer filter

    const flashcardQuestion = deck.filter( (card) => card.id === 1)
    console.log(flashcardQuestion);

    return(
        <>
            <Topbar />
            <CardContainer>
                <FlashCard>
                    <CardCaunter>
                        <span>1/8</span>
                    </CardCaunter>

                    <CardText>
                        {flashcardQuestion.map( (flashcardQuestion, index) => <p key={index} > {flashcardQuestion.question} </p>) }
                    </CardText>

                    <Footer onClick={(e) => console.log(e)} >
                        <img onClick={() => setStart(true)}  src="./assets/turn.png" alt="turn" />
                    </Footer>
                </FlashCard>

            </CardContainer>
        </>
    );
}