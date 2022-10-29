import {useState, useEffect} from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (object, resetObject) => {

    const [stage, setStage] = useState(createStage());

    useEffect(() => {
      const updateStage = prevStage => {
        // Flush Stage
        const newStage = prevStage.map(row =>
            row.map(object => (object[1] === 'clear' ? [0, 'clear'] : object)),
            );

            // Draw the object
            object.object.forEach((row, y) => {
                row.forEach((value, x) => {
                    if(value !==  0) {
                        newStage[y + object.pos.y][x + object.pos.x] = [
                            value,
                            `${object.collided ? 'merged' : 'clear'}`
                        ]
                    }
                });
            });

            return newStage;
      };
      
      setStage(prev => updateStage(prev));
    }, [object])


    return [stage, setStage];
}