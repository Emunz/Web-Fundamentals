
function nameArray(arr, symbol, reversed) {
    if (reversed == false){
        for(var i = 0; i < arr.length; i++){
            console.log(i + ' ' + symbol + ' ' + arr[i])
        }
    } else if (reversed == true) {
        for(var i = 0; i < arr.length; i++) {
            console.log(i + ' ' + symbol + ' ' + arr[arr.length - (i + 1)])
        }
    } else {
        console.log('Please enter true or false for the reversed value')
    }
}

nameArray(['James', 'Jill', 'Jane', 'Jack'], '=>', false)
//logged 0 => James, 1 => Jill, 2 => Jane, 3 => Jack

nameArray(['Steve', 'Paul', 'Dan', 'Ross', 'Johannes'], '--->', false)
//logged 0 ---> Steve, 1 ---> Paul, 2 ---> Dan, 3 ---> Ross, 4 ---> Johannes

nameArray(['Steve', 'Paul', 'Dan', 'Ross', 'Johannes'], '--->', true)
//logged 0 ---> Johannes, 1 ---> Ross, 2 ---> Dan, 3 ---> Paul, 4 ---> Steve