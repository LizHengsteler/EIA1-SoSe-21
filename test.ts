var myNumbers: number [] =  [12, 56, 82, 1, 43, 86, 45, 8, 23];

var highestNumber: number  = myNumbers[0];

for (let index: number = 0; index < myNumbers.length; index++) {
    if (myNumbers[index] > highestNumber) {
        highestNumber = myNumbers[index];
        console.log(highestNumber);
        
    }
}