import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import {useState} from 'react';

import { StyledBoardWrapper, StyledBoard } from "./styles/StyledBoard";


// Custom Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useObject } from "../hooks/useObject";
import { createStage } from "../gameHelpers";


export default function CatchACrunk() {
    return (
        <StyledBoardWrapper>
            <StyledBoard>
            <Stage stage={createStage()}/>
                <aside>
                    <div>
                        <Display text="Score" />
                    </div>
                    <StartButton />
                </aside>
            </StyledBoard>
        </StyledBoardWrapper>
    )
}