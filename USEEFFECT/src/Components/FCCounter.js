import React, { useEffect, useState } from "react";

function FCCounter() {
  let [score, setScore] = useState(0);
  let [age, setAge] = useState(0);

  // 1.On component  load
  useEffect(() => {
    console.log("FC Counter Loaded");
  }, []);
  //2. on component unload
  useEffect(() => {
    return () => {
      console.log("FC Counter will unLoaded");
    };
  }, []);
  // 3.On specfic state variable changes
  useEffect(() => {
    console.log(`score sv changed`);
  }, [score]);
  // 4.On Multi state variable changes
  useEffect(() => {
    console.log(`score and age sv changed`);
  }, [score, age]);

  // 5.any state variable changes
  useEffect(() => {
    console.log(`any sv changed`);
  });
  return (
    <div className="counterDiv">
      <div>
        <h1>FC-Counter</h1>
        <h1>Score:{score}</h1>
        <button
          onClick={() => {
            setScore(score + 1);
          }}>
          Increment score
        </button>
        <button
          onClick={() => {
            setScore(score - 1);
          }}>
          decrement score
        </button>
        <br />
        <h1>Age:{age}</h1>
        <button
          onClick={() => {
            setAge(age + 1);
          }}>
          Increment age
        </button>
        <button
          onClick={() => {
            setAge(age - 1);
          }}>
          decrement age
        </button>
      </div>
    </div>
  );
}

export default FCCounter;
