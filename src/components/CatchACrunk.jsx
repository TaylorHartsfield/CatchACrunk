import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import {useState} from 'react';
import { createStage, checkCollision } from "../gameHelpers";

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

    
    const moveObject = dir => {
        if (!checkCollision(object, stage, {x: dir, y: 0})) {
            updateObjectPos({x: dir, y:0})
        }
    }

    function startGame() {
        // Reset everything
        setStage(createStage());
        resetObject();
        setGameOver(false);
       
    }

    function drop() {
        if (!checkCollision(object, stage, {x: 0, y: 1})) {

        updateObjectPos({x:0, y: 1, collided: false})

        } else {
            if (object.pos.y < 1) {
                setGameOver(true);
                setDropTime(null);
            }
            updateObjectPos({ x:0 , y: 0, collided: true})
        }
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