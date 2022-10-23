const doubleDigitNumber = (number: number): string => {
  return number < 10 ? `0${number}` : number.toString();
};

export default doubleDigitNumber;
