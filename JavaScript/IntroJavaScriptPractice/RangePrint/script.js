

function printRange(x, y, z) {
    if(typeof z === 'undefined') {
        z = 1;
    }
    if(typeof y === 'undefined') {
        y = x;
        x = 0;
    }

    for(var i = x; i < y; i = i + z) {
        console.log(i);
    }
}

printRange(2, 18, 4)
// logged 2, 6, 10, 14

printRange(-20, -8, 2)
// logged -20, -18, -16, -14, -12, -10

printRange(1,9)
//logged 1, 2, 3, 4, 5, 6, 7, 8

printRange(7)
//logged 0, 1, 2, 3, 4, 5, 6

printRange(-12, -8)
//logged -12, -11, -10, -9

printRange(1, 14, 3)
//logged 1, 4, 7, 10, 13

printRange(20)
//logged 0 , 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19

printRange(2, 9)
//logged 2, 3, 4, 5, 6, 7, 8