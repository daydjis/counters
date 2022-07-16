import React, { useState } from "react";
import Counter from "./counter";

const СounstersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 2, name: "Мяч" },
    { id: 2, value: 0, name: "Тарелка" },
    { id: 3, value: 0, name: "Вилка" },
  ];

  const [counter, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    console.log("q", id);
    const newCounters = counter.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
    console.log("Сброс");
  };

  const handleIncrement = (id) => {
    setCounters((prevValue) => {
      return [...prevValue];
    });
    const indexOfElement = counter.findIndex((element) => element.id === id);
    counter[indexOfElement].value += 1;
  };

  const handleDecrement = (id) => {
    setCounters((prevValue) => {
      return [...prevValue];
    });
    const indexOfElement = counter.findIndex((element) => element.id === id);
    counter[indexOfElement].value -= 1;
  };
  return (
    <>
      {counter.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        ></Counter>
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default СounstersList;
