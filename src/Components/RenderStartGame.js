import Card from "./Card";
import HomeScreen from "./HomeScreen";


export default function RenderStartGame({start, setStart}) {

    return (
        start ? <Card/> : <HomeScreen setStart={setStart}/>
    );
}