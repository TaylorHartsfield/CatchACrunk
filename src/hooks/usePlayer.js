import {useState} from 'react';
import Player from '../components/Player';
import {randomFallingOject} from '../fallObjects';

export const usePlayer = () => {

    const [player, setPlayer] = useState({

        pos:{x: 0, 7: 100},
        object: <Player />,
        collided: false,

    });

    return [player]

}