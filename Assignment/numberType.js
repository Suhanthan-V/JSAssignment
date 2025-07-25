function numType (number){
    switch(true){
        case (number > 0) :
            return "POSITIVE";
            break;
        case (number == 0):
            return "ZERO";
            break;
        case (number < 0):
            return "NEGATIVE";
            break;
    }
    console.log("Failure case")
}
var numberOne = 0;
var numberTwo = 5;
var numberThree = -7;


console.log(numType(numberOne));
console.log(numType(numberTwo));
console.log(numType(numberThree));