var HOUR = 7
var MINUTE = 15
var PERIOD = "AM";

if (MINUTE > 30) {
    if (HOUR === 12) {
        console.log('It is almost 1' + PERIOD)
    } else {
        console.log('It is almost ' + (HOUR + 1) + PERIOD)
    }
} else {
    console.log('It is just after ' + HOUR + PERIOD)
}