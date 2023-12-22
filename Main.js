
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

//        Funkcie SpecialRound

  function specialRound(RandomOd100do999, lastDigits = 1, roundingType = '4/9') {
    const multiplier = Math.pow(10, lastDigits);
    const roundedNumber = Math.round(RandomOd100do999 / multiplier) * multiplier;
  
    if (lastDigits === 1) {
      switch (roundingType) {
        case '0':
          return Math.floor(roundedNumber / 10) * 10;
        case '9':
          return Math.floor((roundedNumber + 9) / 10) * 10 - 1;
        case '4/9':
           Math.round(roundedNumber / 5) * 5;
          if(RandomOd100do999>roundedNumber){
            return roundedNumber +4 }
          else if (RandomOd100do999<roundedNumber){
              return roundedNumber -1}
          else
              return roundedNumber-1
          case '0/5':
             Math.round(roundedNumber / 5) * 5;
          if(RandomOd100do999<roundedNumber)
          return roundedNumber -5
          else if (RandomOd100do999>roundedNumber){
          return roundedNumber +5 }
          else
            return roundedNumber
        default:
          break;
      }
    } 
    return roundedNumber;
} 
function specialRound05(RandomOd100do999, base, roundingType) {
  if (roundingType === '0/5') {
    const roundedValue = Math.floor(RandomOd100do999 / base) * base;
    const remainder = RandomOd100do999 % base;


    if (remainder >= base / 2) {
      return roundedValue + base;
    } else {
      return roundedValue;
    }
  } else {
    throw new Error('Unsupported rounding type');
  }
}
function specialRound00(RandomOd1000do9999, base, roundingType) {
  if (roundingType === '00') {
    const roundedValue = Math.round(RandomOd1000do9999 / base) * base;
    return roundedValue;
  } else if (roundingType === '50') {
    const roundedValue = Math.round((RandomOd1000do9999 + base / 2) / base) * base;
    return roundedValue;
  } else {
    throw new Error('Unsupported rounding type');
  }
}
function specialRound50(RandomOd1000do9999, base, roundingType) {
  if (roundingType === '50') {
    const roundedValue = Math.round(RandomOd1000do9999 / base) * base;
    return roundedValue;
  } else {
    throw new Error('Unsupported rounding type');
  }
}
function specialRound000(RandomOd10000do99999, base, roundingType) {
  if (roundingType === '000') {
    const roundedValue = Math.round(RandomOd10000do99999 / base) * base;
    return roundedValue;
  } else if (roundingType === '1000') {
    const roundedValue = Math.round((RandomOd10000do99999 + base / 2) / base) * base;
    return roundedValue;
  } else {
    throw new Error('Unsupported rounding type');
  }
}
function specialRound0000(RandomOd10000do99999, base, roundingType) {
  if (roundingType === '0000') {
    const roundedValue = Math.round(RandomOd10000do99999 / base) * base;
    return roundedValue;
  } else if (roundingType === '10000') {
    const roundedValue = Math.round((RandomOd10000do99999 + base / 2) / base) * base;
    return roundedValue;
  } else {
    throw new Error('Unsupported rounding type');
  }
}
function specialRound00000(RandomOd100000do999999, base, roundingType) {
  if (roundingType === '00000') {
    const roundedValue = Math.round(RandomOd100000do999999 / base) * base;
    return roundedValue;
  } else {
    throw new Error('Unsupported rounding type');
  }
}
function specialRound50000(RandomOd100000do999999, base, roundingType) {
  if (roundingType === '50000') {
    const roundedValue = Math.round(RandomOd100000do999999 / base) * base;
    return roundedValue;
  } 
}

//      Console logs

console.log("round so that the final number ends with '0' > " + specialRound(RandomOd100do999, 1, '0'));   
console.log("round so that the final number ends with '9' > " + specialRound(RandomOd100do999, 1, '9'));    
console.log("round so that the final number ends with '4' or '9', which is closer > " + specialRound(RandomOd100do999, 1, '4/9'));  

console.log("round so that the final number ends with '0' or '5', which is closer > " + specialRound05(RandomOd100do999, 5, '0/5'));  

console.log("round so that the final number ends with '00' > " + specialRound00(RandomOd1000do9999, 100, '00'));  
console.log("round so that the final number ends with '50' or '00', which is closer > " + specialRound50(RandomOd1000do9999, 50, '50')); 

console.log("round so that the final number ends with '000' > " + specialRound000(RandomOd10000do99999, 1000, '000')); 

console.log("round so that the final number ends with '0000' > " + specialRound0000(RandomOd10000do99999, 10000, '0000')); 

console.log("round so that the final number ends with '00000' > " + specialRound00000(RandomOd100000do999999, 100000, '00000')); 
console.log("round so that the final number ends with '00000' or '50000' > " + specialRound50000(RandomOd100000do999999, 50000, '50000')); 