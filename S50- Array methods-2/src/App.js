import React, { useState } from "react";
import "./App.css";
function App() {
  let [fruits, setFruits] = useState([
    "apple",
    "banana",
    "orange",
    "grape",
    "watermelon",
    "kiwi",
    "apple",
    "pineapple",
    "strawberry",
    "blueberry",
  ]);
  let [result, setResult] = useState("");

  let handleLength = () => {
    setResult(`Array Length: ${fruits.length}`);
  };

  let handleToString = () => {
    setResult(`Array as String: ${fruits.toString()}`);
  };

  let handleAt = () => {
    let index = parseInt(prompt("Enter index: Ex: 1"));
    if (!isNaN(index) && index >= 0 && index < fruits.length) {
      setResult(`Element at Index ${index}: ${fruits[index]}`);
    } else {
      setResult("Invalid index or index out of range.");
    }
  };

  let handleJoin = () => {
    let separator = prompt("Enter separator: EX: ||");
    setResult(`Array joined with '${separator}': ${fruits.join(separator)}`);
  };

  let handlePop = () => {
    let lastFruit = fruits.pop();
    setFruits([...fruits]);
    setResult(`pop means Removed last element: ${lastFruit}`);
  };

  let handlePush = () => {
    let newFruit = prompt("Enter a fruit to add: Ex: Mango");
    setFruits([...fruits, newFruit]);
    setResult(`Push means Added '${newFruit}' at the end`);
  };

  let handleShift = () => {
    let firstFruit = fruits.shift();
    setFruits([...fruits]);
    setResult(`Shift means Removed first element: ${firstFruit}`);
  };

  let handleUnshift = () => {
    let newFruit = prompt("Enter a fruit to add at beginning:");
    setFruits([newFruit, ...fruits]);
    setResult(`Unshift means Added '${newFruit}' at the beginning`);
  };

  let handleDelete = () => {
    let index = parseInt(prompt("Enter index to delete: Ex: 0"));
    if (!isNaN(index) && index >= 0 && index < fruits.length) {
      fruits.splice(index, 1);
      setFruits([...fruits]);
      setResult(`Deleted element at index ${index}- ${fruits}`);
    } else {
      setResult("Invalid index or index out of range.");
    }
  };
  let handleConcat = () => {
    let newFruits = prompt(
      "Enter fruits to concatenate (comma separated):"
    ).split(",");
    let concatenatedArray = fruits.concat(newFruits);
    setResult(`Concatenated array: ${concatenatedArray}`);
  };

  let handleCopyWithin = () => {
    let target = prompt("Enter target index:");
    let start = prompt("Enter start index:");
    let end = prompt("Enter end index:");
    fruits.copyWithin(target, start, end);
    setFruits([...fruits]);
    setResult(
      `The copyWithin() method copies array elements to another position in an array:Copied elements to index:  ${fruits}`
    );
  };

  let handleFlat = () => {
    let flatAry = [
      ["apple", "banana"],
      ["orange", "grape"],
      ["watermelon", "kiwi"],
    ];
    let flatArray = flatAry.flat();
    setResult(`Flattened array: ${flatArray}`);
  };

  let handleSplice = () => {
    let index = prompt("Enter index:EX:0");
    let deleteCount = prompt("Enter delete count:EX:3");
    let newElements = prompt(
      "Enter new elements (comma separated):EX: Mango"
    ).split(",");
    let removedElements = fruits.splice(index, deleteCount, ...newElements);
    setFruits([...fruits]);
    setResult(
      `The splice() method can be used to add new items to an array: ${removedElements}`
    );
  };

  let handleSlice = () => {
    let start = prompt("Enter start index:");
    let end = prompt("Enter end index:");
    let slicedArray = fruits.slice(start, end);
    setResult(
      `Slice means out a part of an array starting from array,return new array: ${slicedArray}`
    );
  };
  let handleFill = () => {
    let value = prompt("Enter the Value: Ex:Mango");
    let start = prompt("Enter start index:");
    let end = prompt("Enter end index:");
    let fillArray = fruits.fill(value, start, end);
    setResult(
      `The fill() method overwrites the original array.Start and end position can be specified: ${fillArray}`
    );
  };
  let handleIncludes = () => {
    let value = prompt("Enter the Value: Ex:apple");
    let includesArray = fruits.includes(value);
    setResult(
      `The includes() method returns true or false if an array contains a specified value: ${includesArray}`
    );
  };
  let handleIndexOf = () => {
    let value = prompt("Enter the Value: Ex:apple");
    let target = prompt("Enter the specified value: EX:0");
    let indexOfArray = fruits.indexOf(value, target);
    setResult(
      `The indexOf() method returns the first index (position) of a specified value.: ${indexOfArray}-${value}`
    );
  };
  let handleLastIndexOf = () => {
    let value = prompt("Enter the Value: Ex:apple");
    let lastIndexOfArray = fruits.lastIndexOf(value);
    setResult(
      `The lastIndexOf() method returns the last index (position) of a specified value: ${lastIndexOfArray}`
    );
  };
  let handleReverse = () => {
    let reverseArray = fruits.reverse();
    setResult(
      `The reverse() method reverses the order of the elements in an array.: ${reverseArray}`
    );
  };
  let handleForm = () => {
    let value = prompt("Enter the Value: Ex:123456789");
    let fromArray = Array.from(value);
    setResult(
      `The Array.from() method returns an array from any iterable object.: ${fromArray}`
    );
  };
  let handleIsArray = () => {
    let isArray = Array.isArray(fruits);
    setResult(
      `The isArray() method returns true if an object is an array, otherwise false.Check if another datatype is an array: ${isArray}`
    );
  };
  let handleForEach = () => {
    let result = "";
    fruits.forEach((ele, i) => {
      result += `${i}: ${ele}\n`;
    });
    setResult(
      `The forEach() method calls a function for each element in an array: ${result}`
    );
  };
  let handleEvery = () => {
    let minLength = parseInt(
      prompt("Enter a minimum length of element in array to check: Ex: 4")
    );
    if (minLength) {
      if (fruits.length === 0) {
        setResult("The fruits array is empty.");
      } else {
        let everyResult = fruits.every((fruit) => fruit.length > minLength);
        setResult(
          `The every() method tests whether all fruits have a length greater than ${minLength}: ${everyResult}`
        );
      }
    } else {
      setResult("Invalid input. Please enter a valid number.");
    }
  };
  let handleSome = () => {
    let maxLength = parseInt(
      prompt("Enter a maximum length of element in array to check: Ex: 6")
    );
    if (maxLength) {
      if (fruits.length === 0) {
        setResult("The fruits array is empty.");
      } else {
        let someResult = fruits.some((fruit) => fruit.length <= maxLength);
        setResult(
          `The some() method tests whether at least one fruit has a length less than or equal to ${maxLength}: ${someResult}`
        );
      }
    } else {
      setResult("Invalid input. Please enter a valid number.");
    }
  };
  let handleFind = () => {
    let searchFruit = prompt("Enter a fruit to find: Ex: apple");
    let foundFruit = fruits.find(
      (fruit) => fruit.toLowerCase() === searchFruit.toLowerCase()
    );
    if (foundFruit) {
      setResult(`The find() method found :  '${foundFruit}'.`);
    } else {
      setResult(`The find() method did not find '${searchFruit}'.`);
    }
  };
  let handleFindIndex = () => {
    let searchFruitIndex = prompt("Enter a fruit to findIndex: Ex: apple");
    let foundIndexFruit = fruits.findIndex(
      (fruit) => fruit.toLowerCase() === searchFruitIndex.toLowerCase()
    );
    if (foundIndexFruit) {
      setResult(`The findIndex() method found :  '${foundIndexFruit}'.`);
    } else {
      setResult(
        `The findIndex() method did not findIndex '${searchFruitIndex}'.`
      );
    }
  };
  let handleFindLastIndex = () => {
    let searchFruitLastIndex = prompt(
      "Enter a fruit to findLastIndex: Ex: apple"
    );
    let foundIndexLastFruit = fruits.findLastIndex(
      (fruit) => fruit.toLowerCase() === searchFruitLastIndex.toLowerCase()
    );
    if (foundIndexLastFruit) {
      setResult(
        `The findLastIndex() method found :  '${foundIndexLastFruit}'.`
      );
    } else {
      setResult(
        `The findlastIndex() method did not findLastIndex '${searchFruitLastIndex}'.`
      );
    }
  };
  let handleReduce = () => {
    let longestFruit = fruits.reduce((longest, fruit) => {
      return fruit.length > longest.length ? fruit : longest;
    }, "");
    setResult(
      `The reduce() method found the longest fruit name: ${longestFruit}`
    );
  };
  let handleReduceRight = () => {
    let reduceRightFruits = fruits.reduceRight((acc, fruit) =>
      acc ? acc + ", " + fruit : fruit
    );
    setResult(
      `The reduceRight() method concatenated all fruit names in reverse order: ${reduceRightFruits}`
    );
  };
  let handleFilter = () => {
    let value = prompt("Enter the Value: EX: a");
    let filteredFruits = fruits.filter((fruit) => fruit.includes(value));
    setResult(
      `The filter() method found the following fruits containing ${value}: ${filteredFruits.join(
        ", "
      )}`
    );
  };
  let handleSort = () => {
    let sortedFruits = [...fruits].sort((a, b) => a.length - b.length);
    setResult(
      `The sort() method sorted the fruits by string length: ${sortedFruits.join(
        ", "
      )}`
    );
  };
  let handleMap = () => {
    let capitalizedFruits = fruits.map((fruit) => {
      return fruit.charAt(0).toUpperCase() + fruit.slice(1);
    });
    setResult(
      `The map() method capitalized the first letter of each fruit: ${capitalizedFruits.join(
        ", "
      )}`
    );
  };

  return (
    <div className="container">
      <h1 className="heading">Array Methods</h1>
      <ul className="fruits-list">
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <div className="button-container">
      <button onClick={handleLength}>Array Length</button>
      <button onClick={handleToString}>Array toString()</button>
      <button onClick={handleAt}>Array at()</button>
      <button onClick={handleJoin}>Array join()</button>
      <button onClick={handlePop}>Array pop()</button>
      <button onClick={handlePush}>Array push()</button>
      <button onClick={handleShift}>Array shift()</button>
      <button onClick={handleUnshift}>Array unshift()</button>
      <button onClick={handleDelete}>Array Delete()</button>
      <button onClick={handleConcat}>Array concat()</button>
      <button onClick={handleCopyWithin}>Array copyWithin()</button>
      <button onClick={handleFlat}>Array flat()</button>
      <button onClick={handleSplice}>Array splice()</button>
      <button onClick={handleSlice}>Array slice()</button>
      <button onClick={handleFill}>Array Fill </button>
      <button onClick={handleIncludes}>Array Includes </button>
      <button onClick={handleIndexOf}>Array IndexOf </button>
      <button onClick={handleLastIndexOf}>Array LastIndex </button>
      <button onClick={handleReverse}>Array Reverse </button>
      <button onClick={handleForm}>Array From </button>
      <button onClick={handleIsArray}>Array IsArray </button>
      <button onClick={handleForEach}>Array ForEach</button>
      <button onClick={handleEvery}>Array Every</button>
      <button onClick={handleSome}>Array Some</button>
      <button onClick={handleFind}>Array Find</button>
      <button onClick={handleFindIndex}>Array FindIndex</button>
      <button onClick={handleFindLastIndex}>Array FindLastIndex</button>
      <button onClick={handleReduce}>Find Reduce</button>
      <button onClick={handleReduceRight}>Array ReduceRight</button>
      <button onClick={handleFilter}>Array Filter </button>
      <button onClick={handleSort}> Array Sort </button>
      <button onClick={handleMap}>Array Map</button>
        </div>
    
       <h1 className="result">{result}</h1>
    </div>
  
  );
}

export default App;
