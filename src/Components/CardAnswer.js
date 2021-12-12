import Topbar from "./Topbar";
import { useState} from "react";
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

export default function CardAnswer({mudarCor, setMudarCor, mudarSombra, setMudarSombra}) {

    //const [...inicio, true]

    const flashcardAnswer = deck.filter( (answer) => answer.id === 1)

    function click(e) {
        switch (e.target.id) {
            case '1':
                setMudarCor('#000000')
                setMudarSombra('rgba(0, 0, 0, 0.12)')
                break;
            case '2':
                setMudarCor('#F74848')
                setMudarSombra('rgba(246, 72, 72, 0.10)')
                break;
            case '3':
                setMudarCor('#62DB38')
                setMudarSombra('rgba(98, 219, 56, 0.20)')
                break;    
            case '4':
                setMudarCor('#FFEF61')
                setMudarSombra('rgba(255, 239, 97, 0.50)')
                break;
            default:
                break;
        }
    }

    return(
        <>
        <Topbar />

        <CardContainer>
            <FlashCard borderColor={mudarCor} shadowColor={mudarSombra} >
                <CardCaunter>
                    <span>1/{deck.length}</span>
                </CardCaunter>

                <CardText>
                    {flashcardAnswer.map( (flashcard, index) => <p key={index}> {flashcard.answer} </p>)}
                </CardText>

                <Footer>
                    <Options>

                        <Option onClick={click} id="1" borderColor='#000000'>
                            Aprendi <br/> agora
                        </Option>

                        <Option onClick={click} id="2" borderColor='#F74848' >
                            Não <br/> lembrei
                        </Option>

                        <Option onClick={click} id="3" borderColor='#62DB38' >
                            Lembrei <br/> com <br/> esforço
                        </Option>

                        <Option onClick={click} id="4" borderColor='#FFEF61' >
                            Zap!
                        </Option>

                    </Options>
                </Footer>

            </FlashCard>

        </CardContainer>
        </>
    );
}