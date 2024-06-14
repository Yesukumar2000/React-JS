import React, { useState } from "react";
import'./StringMethods.css';
function StringMethods() {
  let [cars] = useState([
    "Toyota",
    "Tesla",
    "BMW",
    "Mercedes",
    "Ford",
    "Audi",
    "volkswagen",
    "Honda Honda",
    "Hyundai",
  ]);
  let [result, setResult] = useState("");

  let handleUpperCase = () => {
    let upperCaseString = cars.map((car) => car.toUpperCase());
    setResult(`Convert string to upper case(Capital): -${upperCaseString}`);
  };
  let handleLowerCase = () => {
    let lowerCaseString = cars.map((car) => car.toLowerCase());
    setResult(`Convert string to Lower case(small):${lowerCaseString}`);
  };

  let handleTrim = () => {
    let value = prompt("enter the String:Ex: spaces Tesla spaces");
    setResult(
      `The trim() method removes whitespace from both sides of a string:${value.trim()} - ${
        value.trim().length
      }`
    );
  };

  let handleTrimStart = () => {
    let value = prompt("enter the String:Ex: spaces Tesla");
    setResult(
      `The trimStart() method works like trim(), but removes whitespace only from the start of a string:${value.trimStart()} - ${
        value.trimStart().length
      }`
    );
  };

  let handleTrimEnd = () => {
    let value = prompt("enter the String:Ex:tesla spaces");
    setResult(
      `The trimEnd() method works like trim(), but removes whitespace only from the end of a string:${value.trimEnd()} - ${
        value.trimEnd().length
      }`
    );
  };
  let handlePadStart = () => {
    let targetLength = prompt("Enter the target length for padStart: Ex: 10");
    let padString = prompt('Enter the pad string: Ex: "*"');
    let paddedStrings = cars.map((car) =>
      car.padStart(targetLength, padString)
    );
    setResult(
      `The padStart() method pads the current string with another string until the resulting string reaches the given length: ${paddedStrings}`
    );
  };
  let handlePadEnd = () => {
    let targetLength = prompt("Enter the target length for padEnd: Ex: 10");

    let padString = prompt('Enter the pad string: Ex: "*"');
    let paddedStrings = cars.map((car) =>
      car.padEnd(targetLength, padString)
    );
    setResult(
      `The padEnd() method pads the current string with another string until the resulting string reaches the given length: ${paddedStrings}`
    );
  };
  let handleRepeat = () => {
    let count = parseInt(prompt("Enter the number of times to repeat each string:"));
    if (!isNaN(count) && count > 0) {
      let repeatedStrings = cars.map((cars) => cars.repeat(count));
      setResult(`Repeated strings: ${repeatedStrings.join(", ")}`);
    } else {
      setResult("Invalid input for repeat.");
    }
  };
  let handleReplace = () => {
    let searchValue = prompt("Enter the substring to replace:EX:Tesla");
    let replaceValue = prompt("Enter the replacement string:");
    let replacedStrings = cars.map((car) => car.replace(searchValue, replaceValue));
    setResult(`Replaced strings: ${replacedStrings.join(", ")}`);
  };
  let handleReplaceAll = () => {
    let searchValue = prompt("Enter the substring to replace:EX:Tesla");
    let replaceValue = prompt("Enter the replacement string:");
    let replacedAllStrings = cars.map((car) => car.replaceAll(searchValue, replaceValue));
    setResult(`Replaced all strings: ${replacedAllStrings.join(", ")}`);
  };
  let handleSplit = () => {
    let separator = prompt("Enter the separator to split the string: EX: ' ' (space)");
    let splitStrings = cars.map((car) => car.split(separator));
    console.log(splitStrings)
    setResult(`Split strings: ${splitStrings} - ${splitStrings.map(arr => arr.join("|")).join(", ")}`);
  };
  let handleConcat = () => {
    let stringToConcat = prompt("Enter the string to concatenate: Ex:!");
    let concatenatedStrings = cars.map((car) => car.concat(stringToConcat));
    setResult(`Concatenated strings: ${concatenatedStrings.join(", ")}`);
  };
  let handleSlice = () => {
    let startIndex = parseInt(prompt("Enter the start index:"));
    let endIndex = parseInt(prompt("Enter the end index:"));
    if (!isNaN(startIndex) && !isNaN(endIndex)) {
      let slicedStrings = cars.map((car) => car.slice(startIndex, endIndex));
      setResult(`Sliced strings: ${slicedStrings.join(", ")}`);
    } else {
      setResult("Invalid input for slice.");
    }
  };

  let handleSubstring = () => {
    let startIndex = parseInt(prompt("Enter the start index:"));
    let endIndex = parseInt(prompt("Enter the end index:"));
    if (!isNaN(startIndex)) {
      let substringStrings = cars.map((car) => car.substring(startIndex, endIndex));
      setResult(`Substring strings: ${substringStrings.join(", ")}`);
    } else {
      setResult("Invalid input for substring.");
    }
  };
  let handleSubstr = () => {
    let start = parseInt(prompt("Enter the start index for substr:"));
    let length = parseInt(prompt("Enter the length for substr:"));
    let substrStrings = cars.map((car) => car.substr(start, length));
    setResult(`Substr strings: ${substrStrings.join(", ")}`);
  };
  let handleAt = () => {
    let index = parseInt(prompt("Enter the index:"));
    if (!isNaN(index)) {
      let atStrings = cars.map((car) => car.at(index));
      setResult(`(at) strings: ${atStrings.join(", ")}`);
    } else {
      setResult("Invalid input for (at).");
    }
  };

  let handleCharAt = () => {
    let index = parseInt(prompt("Enter the index:"));
    if (!isNaN(index)) {
      let charAtStrings = cars.map((car) => car.charAt(index));
      setResult(`charAt strings: ${charAtStrings.join(", ")}`);
    } else {
      setResult("Invalid input for charAt.");
    }
  };
  
  let handleStringArray = () => {
    let index = parseInt(prompt("Enter the index:"));
    if (!isNaN(index)) {
      let stringArray = cars.map((car) => car[index]);
      setResult(`[] strings: ${stringArray.join(", ")}`);
    }else {
      setResult("Invalid input for StringArray.");
    }
  };
  let handleCharCodeAt = () => {
    let index = parseInt(prompt("Enter the index:Ex: 2"));
    if (!isNaN(index)) {
      let charCodeStrings = cars.map((car) => {
        if (index < car.length) {
          return car.charCodeAt(index);
        } else {
          return null;
        }
      });
      setResult(`charCodeAt strings: ${charCodeStrings.join(", ")}`);
    } else {
      setResult("Invalid input for charCodeAt.");
    }
  };
  let handleCharCodeAtString = () => {
    let inputString = prompt("Enter a string:");
    let charCodes = [];
    for (let i = 0; i < inputString.length; i++) {
      charCodes.push(inputString.charCodeAt(i));
    }
    setResult(`charCodeAt for "${inputString}": ${charCodes.join(", ")}`);
  };
  let handleStartsWith = () => {
    let searchString = prompt("Enter the search string:Ex: T");
    let startsWithStrings = cars.filter((car) => car.startsWith(searchString));
    setResult(`Strings that start with "${searchString}": ${startsWithStrings.join(", ")}`);
  };

  let handleEndsWith = () => {
    let searchString = prompt("Enter the search string:Ex: a");
    let endsWithStrings = cars.filter((car) => car.endsWith(searchString));
    setResult(`Strings that end with "${searchString}": ${endsWithStrings.join(", ")}`);
  };
  let handleIncludes = () => {
    let searchString = prompt("Enter the search string: EX: Honda");
    let includesStrings = cars.filter((car) => car.includes(searchString));
    setResult(`Strings that include "${searchString}": ${includesStrings.join(", ")}`);
  };
  let handleSearch = () => {
    let searchString = prompt("Enter the search string:Ex: Honda");
    let searchIndexes = cars.map((car) => {
      let index = car.search(searchString);
      return index !== -1 ? index : 'notFound' ;
    });
    setResult(`Search result for "${searchString}" in each string: ${searchIndexes}`);
  };
  return (
    <div className="container">
      <h1 className="heading">String Methods</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
      <div className="button-container">
        <button onClick={handleUpperCase}>Uppercase</button>
        <button onClick={handleLowerCase}>Lowercase</button>
        <button onClick={handleTrim}>Trim</button>
        <button onClick={handleTrimStart}>Trim Start</button>
        <button onClick={handleTrimEnd}>Trim End</button>
        <button onClick={handlePadStart}>Pad Start</button>
        <button onClick={handlePadEnd}>Pad End</button>
        <button onClick={handleRepeat}>Repeat</button>
        <button onClick={handleReplace}>Replace</button>
        <button onClick={handleReplaceAll}>Replace All</button>
        <button onClick={handleSplit}>Split</button>
        <button onClick={handleConcat}>Concat</button>
        <button onClick={handleSlice}>Slice</button>
        <button onClick={handleSubstring}>Substring</button>
        <button onClick={handleSubstr}>Substr</button>
        <button onClick={handleAt}>String At</button>
        <button onClick={handleCharAt}>String charAt</button>
        <button onClick={handleStringArray}>String[]</button>
        <button onClick={handleCharCodeAt}>charCodeAt</button>
        <button onClick={handleCharCodeAtString}>charCodeAt (String)</button>
        <button onClick={handleStartsWith}>Starts With</button>
        <button onClick={handleEndsWith}>Ends With</button>
        <button onClick={handleIncludes}>Includes</button>
        <button onClick={handleSearch}>Search</button>
      </div>
      <h2 className="result">{result}</h2>
    </div>
  );
}

export default StringMethods;