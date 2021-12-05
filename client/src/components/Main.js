import { useState } from 'react';

import Action from './Action';
import Number from './Number';

export default function Main() {
  const numbers = [
    '+',
    '-',
    '*',
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
    'Clear',
  ];

  const [currentNum, setCurrentNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [currentSymbol, setCurrentSymbol] = useState('');
  const [secondClick, setSecondClick] = useState(false);

  const onClickNumber = (element) => {
    if (
      element === '-' ||
      element === '+' ||
      element === '*' ||
      element === '/' ||
      element === '='
    ) {
      setCurrentSymbol(element);
      if (secondClick) {
        actionHandler();
        setSecondNum(currentNum);
        setSecondClick(false);
      } else {
        setSecondNum(currentNum);
        setCurrentNum(0);
        setSecondClick(true);
      }
    } else if (element === 'Clear') {
      onClear();
    } else {
      currentNum === 0
        ? setCurrentNum(element.toString())
        : setCurrentNum(currentNum.toString() + element.toString());
    }
  };

  function actionHandler() {
    console.log('ggg');
    switch (currentSymbol) {
      case '+':
        setCurrentNum(parseFloat(secondNum) + parseFloat(currentNum));
        console.log(currentNum);
        break;
      case '-':
        setCurrentNum(parseFloat(secondNum) - parseFloat(currentNum));

        break;
      case '*':
        setCurrentNum(parseFloat(secondNum) * parseFloat(currentNum));
        break;
      case '/':
        setCurrentNum(parseFloat(secondNum) / parseFloat(currentNum));
        break;
      case '=':
        setCurrentSymbol('');
        break;
    }
    setCurrentSymbol('');
  }

  const onClear = () => {
    setCurrentNum(0);
    setCurrentSymbol('');
    setSecondNum(0);
    setSecondClick(false);
  };

  console.log(currentNum);
  console.log(secondNum);
  console.log(currentSymbol);

  return (
    <div className="main">
      <div className="show-clicked">
        {/* Check if there is a previous number to show  */}
        {secondNum !== 0 && currentNum === 0 ? secondNum : currentNum}
      </div>
      <div className="numbers-container">
        {numbers.map((element, i) => (
          <button
            id={`item${i}`}
            className="number"
            onClick={() => onClickNumber(element)}>
            <Number eachNum={element} key={i} />
          </button>
        ))}
      </div>
    </div>
  );
}
