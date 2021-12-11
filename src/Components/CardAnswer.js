import Topbar from "./Topbar";
import react from "react";
import { deck } from "./Deck";

import {     
    CardContainer,
    FlashCard,
    CardCaunter,
    CardText,
    Footer,
    Options,
    Option
} from "./StyledCard"

export default function CardAnswer() {

    const flashcardAnswer = deck.filter( (card) => card.id === 1)

    function click(e) {
        if(e.target.id === '1' ){
            alert('ue, né que deu certo')
        }
        console.log(e)
    }

    return(
        <>
        <Topbar />

        <CardContainer>
            <FlashCard>
                <CardCaunter>
                    <span>1/{deck.length}</span>
                </CardCaunter>

                <CardText>
                    {flashcardAnswer.map( (flashcardAnswer, index) => <p key={index}> {flashcardAnswer.answer} </p>)}
                </CardText>

                <Footer>
                    <Options>
                        <Option 
                            onClick={click} 
                            id="1" 
                            borderColor='#000000'
                        >Aprendi <br/> agora </Option>
                        <Option id="2" borderColor='#F74848' >Não <br/> lembrei</Option>
                        <Option id="3" borderColor='#62DB38' >Lembrei <br/> com <br/> esforço</Option>
                        <Option id="4" borderColor='#FFEF61' >Zap!</Option>
                    </Options>
                </Footer>

            </FlashCard>

        </CardContainer>
        </>
    );
}