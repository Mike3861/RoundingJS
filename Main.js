
//          OD 100   DO 999

function randomDo999(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var RandomOd100do999 = randomDo999(100, 999); 
console.log("random generated number: " + RandomOd100do999);

//          OD 1.000    DO 9.999

function randomDo10000(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var RandomOd1000do9999 = randomDo10000(1000, 9999); 
console.log("random generated number: " + RandomOd1000do9999);

//          OD 10.000   DO 99.999

function randomDo100000(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var RandomOd10000do99999 = randomDo10000(10000, 99999); 
console.log("random generated number: " + RandomOd10000do99999);

//              OD 100.000  DO 999.999

function randomDo1000000(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var RandomOd100000do999999 = randomDo10000(100000, 999999); 
console.log("random generated number: " + RandomOd100000do999999 + "\n");
//------------------------------------
//              Funkcia             //
//------------------------------------
function specialRound(number, lastDigits = 1, roundingType = '4/9') {
  if (isNaN(number) || isNaN(lastDigits)) {
    return 'Invalid input';
  }

  
  const multiplier = Math.pow(10, lastDigits);
  const roundedNumber = Math.round(number / multiplier) * multiplier;
 

  if (lastDigits === 1) {
    switch (roundingType) {
      case '0':
        return Math.floor(roundedNumber / 10) * 10;
      case '9':
        return Math.floor((roundedNumber + 9) / 10) * 10 - 1; 
      case '4/9':
        Math.round(roundedNumber / 5) * 5;
          if(number>roundedNumber){
            return roundedNumber +4 }
          else if (number<roundedNumber){
              return roundedNumber -1}
          else
              return roundedNumber-1
       
      case '0/5':
        return Math.round(number / 5) * 5;
      default:
        return 'Invalid roundingType for 1 digit. Use "0", "9", "4/9", or "0/5".';
    }
  }

  const roundingOptions = {
    2: { '00': 100, '50': 50 },
    3: { '000': 1000 },
    4: { '0000': 10000 },
    5: { '00000': 100000, '50000': 50000 }
  };

  return Math.round(number / roundingOptions[lastDigits][roundingType]) * roundingOptions[lastDigits][roundingType];
}

//            Console logs

console.log("--------------------------------------------------------")
const rounded1 = specialRound(RandomOd100do999,1,'0');
console.log("final number must end with '0' -> " + rounded1);
const rounded2 = specialRound(RandomOd100do999,1,'9');
console.log( "number must end with '9' -> " + rounded2);
const rounded3 = specialRound(RandomOd100do999,1,'4/9');
console.log("final number must end with '4' or '9', which is closer -> " + rounded3);
const rounded4 = specialRound(RandomOd100do999,1,'0/5')
console.log("final number must end with '0' or '5', which is closer -> " + rounded4);

console.log("--------------------------------------------------------")

const rounded5 = specialRound(RandomOd1000do9999, 2, '00');
console.log("final number must end with '00' -> " + rounded5); 

const rounded6 = specialRound(RandomOd1000do9999, 2, '50');
console.log("final number must end with '50' or '00', which is closer -> " + rounded6); 

console.log("--------------------------------------------------------")

const rounded7 = specialRound(RandomOd10000do99999, 3, '000');
console.log("final number must end with '000' -> " + rounded7); 

console.log("--------------------------------------------------------")

const rounded8 = specialRound(RandomOd10000do99999, 4, '0000');
console.log("final number must end with '0000' -> " + rounded8); 

console.log("--------------------------------------------------------")

const rounded9 = specialRound(RandomOd100000do999999, 5, '00000');
console.log("final number must end with '00000' -> " + rounded9); 

const rounded10 = specialRound(RandomOd100000do999999, 5, '50000');
console.log("final number must end with '00000' or '50000' -> " + rounded10); 