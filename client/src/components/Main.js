import { useState } from 'react';

import Action from './Action';
import Number from './Number';

export default function Main() {
  const symbols = [];
  const numbers = [
    '*',
    '-',
    '+',
    '/',
    7,
    8,
    9,
    4,
    5,
    6,
    1,
    2,
    3,
    '.',
    0,
    '=',
    'clear',
  ];

  const [currentNum, setCurrentNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [currentSymbol, setCurrentSymbol] = useState('');

  const onClickNumber = (element) => {
    currentNum === 0
      ? setCurrentNum(element)
      : setCurrentNum(currentNum.toString() + element.toString());

    // console.log(currentNum);
    // console.log(currentNum.toString() + element.toString());
  };

  const onClickSymbol = (symbol) => {
    setCurrentSymbol(Symbol);
  };

  const onSecondNumber = (num) => {};

  const onClear = () => {
    setCurrentNum(0);
    setCurrentSymbol('');
    setSecondNum(0);
  };
  return (
    <>
      <div className="show-clicked">{currentNum === 0 ? '' : currentNum}</div>
      {/* <div className="symbols-container">
        {symbols.map((element, i) => (
          <div className="symbol">
            <Action symbol={element} key={i} />
          </div>
        ))}
      </div> */}

      <div className="numbers-container">
        {numbers.map((element, i) => (
          <div
            id={`item${i}`}
            className="number"
            onClick={() => onClickNumber(element)}>
            <Number eachNum={element} key={i} />
          </div>
        ))}
      </div>

      {/* <div onClick={() => onClear()}>Clear</div> */}
    </>
  );
}
