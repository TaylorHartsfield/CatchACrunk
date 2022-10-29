import { useState, useCallback } from 'react';
import {FALLOBJECTS, randomFallingOject} from '../fallObjects';
import {STAGE_HEIGHT, STAGE_WIDTH} from '../gameHelpers';

export const useObject = () => {

    const [object, setObject] = useState({
        
        pos:{x: 0, y: 0},
        object: FALLOBJECTS[0].shape,
        collided: false,

    });

    const updateObjectPos = ({x, y, collided}) => {
        setObject(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))

    }

    const resetObject = useCallback(() => {
        setObject({
            pos: { x: STAGE_WIDTH / 2-2, y: 0},
            object: randomFallingOject().shape,
            collided:false,
        })

    }, [])

    return [object, updateObjectPos, resetObject]

}