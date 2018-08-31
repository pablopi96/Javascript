function biggerString(strings) {
  let strFinal = "";
  for (let index = 0; index < strings.length; index++) {
    const element = strings[index];
    if (strFinal.length < element.length) {
      strFinal = element;
    }
  }
  return strFinal;
}

function biggerStringV2(strings) {
  let strFinal = "";
  for (const str of strings) {
    const lenStrFinal = strFinal.length;
    if (lenStrFinal < str.length) {
      strFinal = str;
    }
  }
  return strFinal;
}

const strings = ["aaa", "aa", "aaaa"];

const result = biggerString(strings);
console.log("result: " + result);

const resultV2 = biggerStringV2(strings);
console.log("\nresult v2: " + resultV2);
