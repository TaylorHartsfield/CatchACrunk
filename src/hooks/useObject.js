import {useState} from 'react';

import {randomFallingOject} from '../fallObjects';

export const useObject = () => {

    const [object, setObject] = useState({
        
        pos:{x: 0, 7: 0},
        object: randomFallingOject().img,
        collided: false,

    });
    return [object]

}