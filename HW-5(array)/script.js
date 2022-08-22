const arr = []
let userValue;
let arrLengthMin;
let arrLengthMax;


do {
    userValue = +prompt('Enter array length ') 
} while(!userValue || userValue > 10 || userValue < -10 || userValue == 1 || userValue == 0)

if(userValue) {
    userValue = Math.round(userValue)
    userValue = Math.abs(userValue)
}

do{
    arrLengthMin = +prompt('Enter MINIMUM value for array')
}while(!arrLengthMin || arrLengthMin > 10 || arrLengthMin < -10 || arrLengthMin == 0)

if(arrLengthMin) {
    arrLengthMin = Math.round(arrLengthMin)
    arrLengthMin = Math.abs(arrLengthMin)
}

do{
    arrLengthMax = +prompt('Enter MAXIMUM value for array')
}while(!arrLengthMax || arrLengthMax > 50 || arrLengthMax < arrLengthMin || arrLengthMax == 0)

if(arrLengthMax) {
    arrLengthMax = Math.round(arrLengthMax)
    arrLengthMax = Math.abs(arrLengthMax)
}

arr.length = userValue;



for(let i=0; i<arr.length; i++){
    arr[i] = getRandomIntInclusive(arrLengthMin, arrLengthMax);
}
console.log(arr, 'User array');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let minEl = maxEl = arr[0];

for(let i=1; i<arr.length; i++){
    if(arr[i] < minEl){
        minEl = arr[i];
    }

    if(arr[i] > maxEl){
        maxEl = arr[i];
    }
}

let indexOfMin = arr.indexOf(minEl);
let indexOfMax = arr.indexOf(maxEl);

arr[indexOfMin] = maxEl

arr[indexOfMax] = minEl

console.log(arr, 'New array with changes of min/max')




console.log(minEl, 'Min value of new array');
console.log(maxEl, 'Max value of new array');