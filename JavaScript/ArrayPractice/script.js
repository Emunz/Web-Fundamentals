
function onlyNumbers(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            newArr.push(arr[i])
        }
    }
    console.log(newArr);
    return newArr;
}



onlyNumbers(['munz', 9, true, undefined, 0, 3, 'hated it!', -8, false])


function removeNumbers(arr) {
    for(var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            arr.splice(i, 1);
        }
    }
    console.log(arr);
}

removeNumbers([9, 'happy', -12, 'birthday', false, 8, 4, 3, true, 1, 'item'])

