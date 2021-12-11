import Topbar from "./Topbar";
import react from "react";

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
    return(
        <>
        <Topbar />

        <CardContainer>
            <FlashCard>
                <CardCaunter>
                    <span>1/8</span>
                </CardCaunter>

                <CardText>
                    ijdijdiiijdiujdijdijidjidjididjijdijdijdijdidijdijdijdijdijdi
                </CardText>

                <Footer>
                    <Options>
                        <Option onClick={(e) => console.log(e)} id="1" borderColor='#000000' >Aprendi <br/> agora</Option>
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