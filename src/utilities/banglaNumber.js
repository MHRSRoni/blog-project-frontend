/* eslint-disable no-compare-neg-zero */
const banglaNumber = (input) => {
  const isChecking = Math.sign(input);
  if (isNaN(isChecking)) return "invalid input";
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  const result = input
    .toString()
    .split("")
    .map((digit) => {
      return banglaDigits[Number(digit)];
    })
    .join("");

  return result;
};

export default banglaNumber;
