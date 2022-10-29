import { StyledStage } from "./styles/StyledStage";
import Object from './Object';

export default function Stage({stage}) {

    return (
        <StyledStage width={stage[0].length} height={stage.length}>
            {stage.map(row => row.map((cell, x) => <Object key={x} type={cell[0]} />))}
        </StyledStage>
    )
}