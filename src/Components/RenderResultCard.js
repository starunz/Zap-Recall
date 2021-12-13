
import CardSuccess from "./CardSuccess";
import CardFailure from "./CardFailure";

export default function RenderResultCard({finalTrocar}) {

    return(
       finalTrocar ? <CardFailure /> : <CardSuccess />
    );
}