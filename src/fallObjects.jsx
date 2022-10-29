export const FALLOBJECTS = {

    0: {   
        shape: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
       
    ],
        color: '0,0,0'
         
    },

    C: {   
        shape: [
        [0,'C',0],
        [0,'C',0],
        [0,'C',0]
        
    ],
        color: '220, 188, 220'
         
    },

    B: {
        shape: [
            [0,'C',0],
            [0,'C',0],
            [0,'C',0]
        ],
            color: '249,208,179'
    },

    L: {              
        shape: [
            
            [0,'C',0],
            [0,'C',0],
            [0,'C',0]
             
        ]
            ,
            color: '252,41,37'
    }

}

export const randomFallingOject = () => {

    const objects = 'CBL';
    const randObject = 
        objects[Math.floor(Math.random()* objects.length)];
    
    return FALLOBJECTS[randObject]
     
}