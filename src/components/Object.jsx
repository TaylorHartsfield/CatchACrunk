import { StyledObject } from "./styles/StyledObject";
import { FALLOBJECTS } from "../fallObjects";

export default function Object({type}) {

    return (
        <StyledObject
            type={type}
            color={FALLOBJECTS[type].color}>
       
       </StyledObject>
    )

}