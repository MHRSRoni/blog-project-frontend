/* eslint-disable no-compare-neg-zero */
function banglaNumber (englishNumber) {
  const banglaDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  const decimalIndex = englishNumber.toString().indexOf('.');
  const convertedNumber = englishNumber
      .toString()
      .split('')
      .map((digit, index) =>{
          if(index === decimalIndex) return '.'
          return banglaDigits[Number(digit)];
      })
      .join('')

  return convertedNumber

}

export default banglaNumber;