export const FALLOBJECTS = {

    0: {   
        shape: [
        [0,0,0],
       
    ],
        color: '0,0,0'
         
    },

    C: {   
        shape: [
        ['C'],
        
    ],
        color: '220, 188, 220'
         
    },

    B: {
        shape: [
            ['B'],
        ],
            color: '249,208,179'
    },

    L: {              
        shape: [
            
            ['L']
             
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