
============================TASK==============================

==============================================================

Could you create a js function that would receive 3 params and round the first param according to rules in params 2 and 3. While rounding, we never round to any decimals, the result has to be an integer.

const rounded = specialRound(number, lastDigits = 1, roundingType = '4/9')

lastDigits could be 1 through 5
roundingType could have the following options and they depend on the lastDigits number:

For 1 digit:
- roundingType = '0' - round so that the final number ends with '0',
- roundingType = '9' - round so that the final number ends with '9',
- roundingType = '4/9' - round so that the final number ends with '4' or '9', which is closer,
- roundingType = '0/5' - round so that the final number ends with '0' or '5', which is closer.

For 2 digits:
- roundingType = '00' - round so that the final number ends with '00';
- roundingType = '50' - round so that the final number ends with '50' or '00', which is closer;

For 3 digits:
- roundingType = '000' - round so that the final number ends with '000'

For 4 digits:
- roundingType = '0000' - round so that the final number ends with '0000'

For 5 digits:
- roundingType = '00000' - round so that the final number ends with '00000'
- roundingType = '50000' - round so that the final number ends with '00000' or '50000'

Always round to the nearest possible number.

The folllowing tests should be passed OK:

  expect(plan.specialRound(123, 1, '0')).toBe(120)
  expect(plan.specialRound(123, 1, '9')).toBe(119)
  expect(plan.specialRound(123, 1, '4/9')).toBe(124)
 
  expect(plan.specialRound(122, 1, '0/5')).toBe(120)
  expect(plan.specialRound(123, 1, '0/5')).toBe(125)
  expect(plan.specialRound(128, 1, '0/5')).toBe(130)

  expect(plan.specialRound(1123, 2, '00')).toBe(1100)
  expect(plan.specialRound(1101, 2, '50')).toBe(1100)
  expect(plan.specialRound(1143, 2, '50')).toBe(1150)

  expect(plan.specialRound(12345, 3, '000')).toBe(12000)

  expect(plan.specialRound(12345, 4, '0000')).toBe(10000)

  expect(plan.specialRound(123456, 5, '00000')).toBe(100000)
  expect(plan.specialRound(123456, 5, '50000')).toBe(100000)
  expect(plan.specialRound(143456, 5, '50000')).toBe(150000)

==============================================================
