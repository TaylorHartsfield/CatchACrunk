import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import {useState} from 'react';
import { createStage } from "../gameHelpers";

// Styled Components
import { StyledBoardWrapper, StyledBoard } from "./styles/StyledBoard";


// Custom Hooks
import { useStage } from "../hooks/useStage";
import { useObject } from "../hooks/useObject";


export default function CatchACrunk() {

    const [gameOver, setGameOver] = useState(false)
    const [dropTime, setDropTime] = useState(null)

    const [object, updateObjectPos, resetObject] = useObject();
    const [stage, setStage] =useStage(object);

    console.log('re-render');
    
    function moveObject(dir) {
        updateObjectPos({x: dir, y:0})
    }

    function startGame() {
        // Reset everything
        setStage(createStage());
        resetObject();
       
    }

    function drop() {
        updateObjectPos({x:0, y: 1, collided: false})
    }

    function dropObject() {
        drop();
    }

    const move = ({keyCode}) => {
        
    
        if (!gameOver) {
            if(keyCode === 37) {
                moveObject(-1)
            } else if (keyCode === 39) {
                moveObject(1)
            } else if (keyCode === 40) {
                dropObject();
            }
        }

    }

    return (
        <StyledBoardWrapper
        role="button" 
        tabIndex="0" 
        onKeyDown={e => move(e)}>
            <StyledBoard>
            <Stage stage={stage}/>
                <aside>
                    {gameOver ? (
                    <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                    <div>
                        <Display text="Score" />
                    </div>
                    )}
                    <StartButton callback={startGame}/>
                </aside>
            </StyledBoard>
        </StyledBoardWrapper>
    )
}