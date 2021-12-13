import RenderFlashcard from "./RenderFlashcard";
import HomeScreen from "./HomeScreen";


export default function RenderStartGame({start, setStart}) {

    return (
        start ? <RenderFlashcard/> : <HomeScreen setStart={setStart}/>
    );
}