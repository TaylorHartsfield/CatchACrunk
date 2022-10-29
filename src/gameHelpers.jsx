
export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear']) 
    );

export const checkCollision = (object, stage, {x: moveX, y: moveY}) => {
    for (let y = 0; y < object.object.length; y+=1) {
        for (let x = 0; x < object.object[y].length; x += 1) {

            // 1. Check that we are on an object cell
            if (object.object[y][x] !== 0) {
                // 2. Check that object is not moving outside of height
                if ( 
                !stage[y + object.pos.y + moveY] || 

                // 3. Check that object is not moving outside of width

                !stage[y + object.pos.y + moveY][x + object.pos.x + moveX] ||
                // 4. Check that the object we're moving to isn't set to clear

                stage[y + object.pos.y + moveY][x + object.pos.x + moveX][1] !== 'clear'
                )   {
                    return true;
                    } 
                }
            }

        }};
