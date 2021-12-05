import { useState } from 'react';

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
    // Check if it a symbol, a number or a clear button
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
    switch (currentSymbol) {
      case '+':
        setCurrentNum(parseFloat(secondNum) + parseFloat(currentNum));
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
            key={i}
            className="number"
            onClick={() => onClickNumber(element)}>
            <Number symbol={element} />
          </button>
        ))}
      </div>
    </div>
  );
}
