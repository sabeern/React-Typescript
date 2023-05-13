import React from "react";
type numberType = {
  number: number;
};
type positiveType = numberType & {
  isPossitive: boolean;
  isNegative?: never;
  isZero?: never;
};
type negativeType = numberType & {
  isNegative: boolean;
  isPossitive?: never;
  isZero?: never;
};
type zeroType = numberType & {
  isZero: boolean;
  isPossitive?: never;
  isNegative?: never;
};
type propType = positiveType | negativeType | zeroType;
function NumberType({ number, isPossitive, isNegative, isZero }: propType) {
  return (
    <div>
      number {number} is {isPossitive && "positive number"}
      {isNegative && "Negative number"}
      {isZero && "zero"}
    </div>
  );
}

export default NumberType;
