//each level another map!

var gameMap = [ 
    0, 0, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 1, 1, 4, 4, 4, 6, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    0, 0, 0, 1, 1, 0, 0, 1, 5, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 20, 
    1, 1, 1, 3, 2,10, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 3,10, 0, 2, 1, 0, 0, 1, 1, 0, 0, 1,10,11, 1, 1, 
    1, 1, 1, 1,11, 0,10, 2, 1, 3, 0, 0, 1, 1, 0, 1,10,11, 1, 1, 
    1, 1, 1,11, 1, 0,10, 3, 4, 4, 1, 1, 1, 1, 0, 1,11, 1, 1, 1, 
    1, 1, 1,11, 1, 1,10, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1,11, 1, 1, 1, 1, 1,10, 1, 1, 0, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1,10, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,10, 1, 1, 1, 
    1, 1, 1, 1,11, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,11,10, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,11, 1, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1    
];

var gameMap_level2 = [ 
    1, 1, 1, 3, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2,10, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    0, 0, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 1, 1, 4, 4, 4, 6, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    0, 0, 0, 1, 1, 0, 0, 1, 5, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2,10, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 3,10, 0, 2, 1, 0, 0, 1, 1, 0, 0, 1,10,11, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1,10, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,10, 1, 1, 1, 
    1, 1, 1, 1,11, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,11,10, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,11, 1, 1, 1, 
    0, 0, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 1, 1, 4, 4, 4, 6, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    0, 0, 0, 1, 1, 0, 0, 1, 5, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2,10, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 3,10, 0, 2, 1, 0, 0, 1, 1, 0, 0, 1,10,11, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,20    
];

var gameMap_level3 = [ 
    0, 0, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 1, 1, 4, 4, 4, 6, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    0, 0, 0, 1, 1, 0, 0, 1, 5, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2,10, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 3,10, 0, 2, 1, 0, 0, 1, 1, 0, 0, 1,10,11, 1, 1, 
    1, 1, 1, 1,11, 0,10, 2, 1, 3, 0, 0, 1, 1, 0, 1,10,11, 1, 1, 
    1, 1, 1,11, 1, 0,10, 3, 4, 4, 1, 1, 1, 1, 0, 1,11, 1, 1, 1, 
    1, 1, 1,11, 1, 1,10, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,20, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1,10, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,10, 1, 1, 1, 
    1, 1, 1, 1,11, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,11,10, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,11, 1, 1, 1, 
    0, 0, 0, 1, 1, 0, 0, 1, 5, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2,10, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 3,10, 0, 2, 1, 0, 0, 1, 1, 0, 0, 1,10,11, 1, 1, 
    1, 1, 1, 1,11, 0,10, 2, 1, 3, 0, 0, 1, 1, 0, 1,10,11, 1, 1, 
    1, 1, 1,11, 1, 0,10, 3, 4, 4, 1, 1, 1, 1, 0, 1,11, 1, 1, 1, 
    1, 1, 1, 1,11, 1, 1, 1, 1, 1,10, 1, 1, 0, 1, 1, 1, 1, 1, 1
];