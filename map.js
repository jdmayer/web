//each level another map!

var gameMap = [ 
   30,31,32, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 6, 1, 1, 4, 4, 4, 6, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    0, 0, 7, 1, 1,21,22, 1, 5, 1, 1, 1, 1, 0, 0, 1,12, 1, 1, 1, 
    1, 1, 8, 3, 2,24,23, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,20, 
    1, 1, 9, 3, 2,10, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 3,10, 0, 2, 1, 0, 0, 1, 1, 0, 0, 1,10,11, 1, 1, 
    14, 1, 1, 1,11, 0,10, 2, 1, 3, 0, 0, 1, 1, 0, 1,10,11, 1, 1, 
    1, 1, 1,11, 1, 0,10,14, 4, 4, 1, 1, 1, 1, 0, 1,11, 1, 1, 1, 
    1, 1, 1,11, 1, 1,10, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1,11, 1, 1, 1, 1, 1,10, 1, 1, 0, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1,10, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,10, 1, 1, 1, 
    1, 1, 1, 1,11, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,11,10, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,11, 1, 1,15, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 9, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 8, 1, 1, 0, 0, 1, 8, 8, 1, 1, 1, 1, 1, 
    9, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1
];

var gameMap_level1 = [
    0 ,  	0 ,  	0 ,  	10 ,  	10 ,  	11 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    0 ,  	0 ,  	0 ,  	11 ,  	10 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    0 ,  	0 ,  	0 ,  	10 ,  	11 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	20 ,  
    5 ,  	1 ,  	0 ,  	1 ,  	10 ,  	2 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    5 ,  	0 ,  	1 ,  	21 ,  	25 ,  	25 ,  	22 ,  	2 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    8 ,  	6 ,  	2 ,  	28 ,  	29 ,  	29 ,  	26 ,  	2 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    1 ,  	5 ,  	2 ,  	28 ,  	29 ,  	29 ,  	26 ,  	2 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    1 ,  	5 ,  	1 ,  	28 ,  	29 ,  	29 ,  	26 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    0 ,  	5 ,  	15 ,  	24 ,  	27 ,  	27 ,  	23 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    1 ,  	5 ,  	1 ,  	2 ,  	2 ,  	11 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    1 ,  	5 ,  	1 ,  	1 ,  	10 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    2 ,  	5 ,  	1 ,  	10 ,  	10 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    2 ,  	5 ,  	1 ,  	11 ,  	10 ,  	11 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	31 ,  	1 ,  
    2 ,  	5 ,  	1 ,  	10 ,  	11 ,  	10 ,  	1 ,  	1 ,  	10 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    1 ,  	5 ,  	1 ,  	1 ,  	10 ,  	10 ,  	11 ,  	11 ,  	10 ,  	10 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    1 ,  	8 ,  	6 ,  	1 ,  	1 ,  	10 ,  	2 ,  	11 ,  	10 ,  	10 ,  	11 ,  	1 ,  	10 ,  	1 ,  	10 ,  	10 ,  	1 ,  	1 ,  	1 ,  	1 ,  
    1 ,  	0 ,  	5 ,  	1 ,  	1 ,  	2 ,  	2 ,  	2 ,  	2 ,  	2 ,  	10 ,  	10,  	11 ,  	10 ,  	10 ,  	11 ,  	10,  	1 ,  	1 ,  	1 ,  
    1 ,  	1 ,  	5 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	16 ,  	1 ,  	10 ,  	10 ,  	32 ,  	11 ,  	1 ,  	1 ,  	1 ,  
    1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	10 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	11 ,  	10 ,  	10,  	1 ,  
    1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	10 ,  	11 ,  	10 ,  	10 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	1 ,  	10 ,  	10 ,  
        
];

var gameMap_level_1 = [ 
    30,31,32, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 6, 1, 1, 4, 4, 4, 6, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    0, 0, 7, 1, 1,21,22, 1, 5, 1, 1, 1, 1, 0, 0, 1,12, 1, 1, 1, 
    1, 1, 8, 3, 2,24,23, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,20, 
    1, 1, 9, 3, 2,10, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
     1, 1, 1, 3, 3,10, 0, 2, 1, 0, 0, 1, 1, 0, 0, 1,10,11, 1, 1, 
     14, 1, 1, 1,11, 0,10, 2, 1, 3, 0, 0, 1, 1, 0, 1,10,11, 1, 1, 
     1, 1, 1,11, 1, 0,10,14, 4, 4, 1, 1, 1, 1, 0, 1,11, 1, 1, 1, 
     1, 1, 1,11, 1, 1,10, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
     1, 1, 1, 1,11, 1, 1, 1, 1, 1,10, 1, 1, 0, 1, 1, 1, 1, 1, 1, 
     1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 
     1, 1, 1, 1,10, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,10, 1, 1, 1, 
     1, 1, 1, 1,11, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,11,10, 1, 1, 
     1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,11, 1, 1,15, 
     1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
     1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
     1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
     1, 1, 1, 1, 1, 0, 0, 9, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
     1, 1, 1, 1, 1, 0, 0, 8, 1, 1, 0, 0, 1, 8, 8, 1, 1, 1, 1, 1, 
     9, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1
 ];

var gameMap_level2 = [ 
    1, 1, 1, 3, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2,10, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    0, 0, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 1, 1, 4, 4, 4, 6, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    0, 0, 0, 1, 1, 0, 0, 1, 5, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2,10,17, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
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
    1, 1, 1, 3, 3,10, 0, 2, 1, 0, 0, 1, 1, 0, 0, 1,10,11, 1,16, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11,20    
];

var gameMap_level3 = [ 
    0, 0, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 1, 1, 4, 4, 4, 6, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    0, 0, 0, 1, 1, 0, 0, 1, 5, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2,10, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 3,10, 0, 2, 1, 0, 0, 1, 1, 0, 0, 1,10,11, 1, 1, 
    1, 1, 1, 1,11, 0,10, 2, 1, 3, 0, 0, 1, 1, 0, 1,10,11, 1, 1, 
    1, 1, 1,11, 1, 0,10, 3, 4, 4, 1, 1, 1, 1, 0, 1,11,12, 1, 1, 
    1, 1, 1,11, 1, 1,10, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,20, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1,10, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,10, 1, 1, 1, 
    1, 1, 1, 1,11, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,11,10, 1, 1, 
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,11, 1, 1, 1, 
    0, 0, 0, 1, 1, 0, 0, 1, 5, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 2,10, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 
    1, 1, 1, 3, 3,10, 0, 2, 1, 0, 0, 1, 1, 0, 0, 1,10,11, 1, 1, 
    1, 1, 1, 1,11,16,10, 2, 1, 3, 0, 0, 1, 1, 0, 1,10,11, 1, 1, 
    1, 1, 1,11, 1, 0,10, 3, 4, 4, 1, 1, 1, 1, 0, 1,11, 1, 1, 1, 
    1, 1, 1, 1,11, 1, 1, 1, 1, 1,10, 1, 1, 0, 1, 1, 1, 1, 1, 1
];