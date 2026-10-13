// https://leetcode.com/problems/integer-to-english-words/description/

const onesWords = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];

const tensWords = [
  "",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

const teensWords = [
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

const scaleWords = ["", "Thousand", "Million", "Billion"];

function getOnes(num) {
  return onesWords[num];
}

function getTens(num) {
  if (Math.floor(num / 10) === 1) {
    return teensWords[num % 10];
  }

  const tens = tensWords[Math.floor(num / 10)];
  const ones = getOnes(num % 10);

  if (!tens) return ones;
  if (!ones) return tens;

  return `${tens} ${ones}`;
}

function getHundred(num) {
  const hundreds = getOnes(Math.floor(num / 100));
  const tens = getTens(num % 100);

  if (!hundreds) return tens;

  const hundredPart = `${hundreds} Hundred`;

  if (!tens) return hundredPart;

  return `${hundredPart} ${tens}`;
}

function numberToWords(num) {
  if (num === 0) return "Zero";

  let remainingNum = num;
  let result = "";
  let i = 0;

  while (remainingNum > 0) {
    const group = remainingNum % 1000;

    if (group !== 0) {
      const groupWords = getHundred(group);
      const scaleWord = scaleWords[i];

      const currentWords = scaleWord
        ? `${groupWords} ${scaleWord}`
        : groupWords;
      result = result ? `${currentWords} ${result}` : currentWords;
    }

    remainingNum = Math.floor(remainingNum / 1000);
    i++;
  }

  return result;
}

// console.log(numberToWords(567));
console.log(numberToWords(1234567));
console.log(numberToWords(1001001));
console.log(numberToWords(0));

// console.log(numberToWords(234567));
// numberToWords(1234567);

// console.log(getHundred(812));
// console.log(getHundred(953));
// console.log(getTens(3));

///////////////////////////////////////////////////////////////////////////////////////////////

/* Version 2

const onesWords = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};

const tensWords = {
  1: "Ten",
  2: "Twenty",
  3: "Thirty",
  4: "Forty",
  5: "Fifty",
  6: "Sixty",
  7: "Seventy",
  8: "Eighty",
  9: "Ninety",
};

const teensWords = {
  0: "Ten",
  1: "Eleven",
  2: "Twelve",
  3: "Thirteen",
  4: "Fourteen",
  5: "Fifteen",
  6: "Sixteen",
  7: "Seventeen",
  8: "Eighteen",
  9: "Nineteen",
};

const scaleWords = {
  1: "Thousand",
  2: "Million",
  3: "Billion",
};

function getOnes(num) {
  return onesWords[num] ?? "";
}

function getTens(num) {
  if (num[0] === "1") {
    return teensWords[num[1]] ?? "";
  }

  const firstNum = tensWords[num[0]] ?? "";
  const secondNum = getOnes(num[1]);

  return [firstNum, secondNum].filter(Boolean).join(" ");
}

function getHundred(num) {
  const firstNum = getOnes(num.slice(0, 1));
  const tensNum = getTens(num.slice(1));

  const hundredPart = firstNum ? `${firstNum} Hundred` : "";

  return [hundredPart, tensNum].filter(Boolean).join(" ");
}

function numberToWords(num) {
  const strNum = String(num);
  let currentGroupWords = "";
  let groupLength = 0;

  if (strNum.length === 0) {
    return currentGroupWords;
  }

  if (strNum === "0") {
    return "Zero";
  }

  if (strNum.length % 3 === 0) {
    currentGroupWords = getHundred(strNum.slice(0, 3));
    groupLength = 3;
  } else if (strNum.length % 3 === 1) {
    currentGroupWords = getOnes(strNum.slice(0, 1));
    groupLength = 1;
  } else if (strNum.length % 3 === 2) {
    currentGroupWords = getTens(strNum.slice(0, 2));
    groupLength = 2;
  }
  const recursiveWords = numberToWords(strNum.slice(groupLength));
  const scaleWord = scaleWords[(strNum.length - groupLength) / 3] ?? "";

  if (!currentGroupWords) {
    return recursiveWords;
  }

  return [currentGroupWords, scaleWord, recursiveWords]
    .filter(Boolean)
    .join(" ");
}

console.log(numberToWords("1234567"));
console.log(numberToWords("20"));
console.log(numberToWords("10000000011"));
console.log(numberToWords("105"));
console.log(numberToWords("1000404"));

*/