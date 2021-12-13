import { Options, Option} from "./StyledCard"

export default function OptionsAnswers({setColorChange, setChangeShadow, setHidden, savedAnswer, setSavedAnswer}) {

    function click(e) {
        switch (e.target.id) {
            case '1':
                setColorChange('#000000');
                setChangeShadow('rgba(0, 0, 0, 0.12)');
                setHidden(true);
                setSavedAnswer([...savedAnswer, true])
                break;
            case '2':
                setColorChange('#F74848');
                setChangeShadow('rgba(246, 72, 72, 0.10)');
                setHidden(true);
                setSavedAnswer([...savedAnswer, false])
                break;
            case '3':
                setColorChange('#62DB38');
                setChangeShadow('rgba(98, 219, 56, 0.20)');
                setHidden(true);
                setSavedAnswer([...savedAnswer, true])
                break;    
            case '4':
                setColorChange('#FFEF61');
                setChangeShadow('rgba(255, 239, 97, 0.50)');
                setHidden(true);
                setSavedAnswer([...savedAnswer, true])
                break;
            default:
                break;
        }
    }

    return(
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
    );
}