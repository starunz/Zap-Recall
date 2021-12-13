import { useState } from "react";
import RenderStartGame from "./RenderStartGame";

export default function App() {
    const [start, setStart] = useState(false);

    return (
        <>
            <RenderStartGame start={start} setStart={setStart}/>
        </>
    );
}