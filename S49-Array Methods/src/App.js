import React, { useState } from 'react';
import './App.css';
function App() {
  let [fruits, setFruits] = useState(["apple", "banana", "orange", "grape", "watermelon", "kiwi", "pineapple", "strawberry", "blueberry"]);
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
    let newFruits = prompt("Enter fruits to concatenate (comma separated):").split(",");
    let concatenatedArray = fruits.concat(newFruits);
    setResult(`Concatenated array: ${concatenatedArray}`);
  };

  let handleCopyWithin = () => {
    let target = prompt("Enter target index:");
    let start = prompt("Enter start index:");
    let end = prompt("Enter end index:");
    fruits.copyWithin(target, start, end);
    setFruits([...fruits]); 
    setResult(`The copyWithin() method copies array elements to another position in an array:Copied elements to index:  ${fruits}`);
  };

  let handleFlat = () => {
    let flatAry = [['apple','banana'],['orange','grape'],['watermelon','kiwi']]
    let flatArray = flatAry.flat();
    setResult(`Flattened array: ${flatArray}`);
  };

  let handleSplice = () => {
    let index = prompt("Enter index:EX:0");
    let deleteCount = prompt("Enter delete count:EX:3");
    let newElements = prompt("Enter new elements (comma separated):EX: Mango").split(",");
    let removedElements = fruits.splice(index, deleteCount, ...newElements);
    setFruits([...fruits]); 
    setResult(`The splice() method can be used to add new items to an array: ${removedElements}`);
  };

  let handleSlice = () => {
    let start = prompt("Enter start index:");
    let end = prompt("Enter end index:");
    let slicedArray = fruits.slice(start, end);
    setResult(`Slice means out a part of an array starting from array,return new array: ${slicedArray}`);
  };

  return (
    <div className="container">
      <h1 className="heading">Array Methods Using Fruits </h1> 
      <ul className="fruits-list"> 
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={handleLength}>Array Length</button>
      <button onClick={handleToString}>Array toString()</button>
      <button onClick={handleAt}>Array at()</button>
      <button onClick={handleJoin}>Array join()</button>
      <button onClick={handlePop}>Array pop()</button>
      <button onClick={handlePush}>Array push()</button>
      <button onClick={handleShift}>Array shift()</button>
      <button onClick={handleUnshift}>Array unshift()</button>
      <button onClick={handleDelete}>Array delete()</button>
      <button onClick={handleConcat}>Array concat()</button>
      <button onClick={handleCopyWithin}>Array copyWithin()</button>
      <button onClick={handleFlat}>Array flat()</button>
      <button onClick={handleSplice}>Array splice()</button>
      <button onClick={handleSlice}>Array slice()</button>
      <h1 className="result">{result}</h1>
    </div>
  );
}

export default App;
