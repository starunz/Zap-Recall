import { Options, Option} from "./StyledCard"

export default function OptionsAnswers({setMudarCor, setMudarSombra, setSumir, guardar, setGuardar}) {

    function click(e) {
        switch (e.target.id) {
            case '1':
                setMudarCor('#000000');
                setMudarSombra('rgba(0, 0, 0, 0.12)');
                setSumir(true);
                setGuardar([...guardar, true])
                break;
            case '2':
                setMudarCor('#F74848');
                setMudarSombra('rgba(246, 72, 72, 0.10)');
                setSumir(true);
                setGuardar([...guardar, false])
                break;
            case '3':
                setMudarCor('#62DB38');
                setMudarSombra('rgba(98, 219, 56, 0.20)');
                setSumir(true);
                setGuardar([...guardar, true])
                break;    
            case '4':
                setMudarCor('#FFEF61');
                setMudarSombra('rgba(255, 239, 97, 0.50)');
                setSumir(true);
                setGuardar([...guardar, true])
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