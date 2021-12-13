import CardSuccess from "./CardSuccess";
import CardFailure from "./CardFailure";

export default function RenderResultCard({changeResult}) {
    
    return(
       changeResult ? <CardFailure /> : <CardSuccess />
    );
}