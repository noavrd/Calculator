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
    'Clear',
  ];

  const [currentNum, setCurrentNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [currentSymbol, setCurrentSymbol] = useState('');
  const [prevSymbol, setPrevSymbol] = useState('');

  const onClickNumber = (element) => {
    if (
      element === '-' ||
      element === '+' ||
      element === '*' ||
      element === '/' ||
      element === '='
    ) {
      //check if needed
      // currentSymbol !== '' && setPrevSymbol(currentSymbol);
      currentSymbol !== '' && actionHandler();
      setCurrentSymbol(element);
      // if (currentSymbol !== '') {
      //   setSecondNum(currentNum);
      //   setCurrentNum(0);

      //   actionHandler();
      // }
      currentSymbol == '' && setCurrentNum(0);
      setSecondNum(parseFloat(currentNum));
      // setCurrentNum(0);
      setCurrentSymbol(element);
    } else if (element === 'Clear') {
      onClear();
    } else {
      currentNum === 0
        ? setCurrentNum(parseFloat(element))
        : setCurrentNum(parseFloat(currentNum.toString() + element.toString()));
    }

    // switch (currentSymbol) {
    //   case '+':
    //     break;
    //   case '-':
    //     break;
    //   case '*':
    //     break;
    //   case '/':
    //     break;
    //   case '=':
    //     break;
    // }

    // console.log(currentNum);
    // console.log(currentNum.toString() + element.toString());
  };

  function actionHandler() {
    console.log('ggg');
    // setSecondNum(Number(secondNum));
    // setCurrentNum(Number(currentNum));

    switch (currentSymbol) {
      case '+':
        setCurrentNum(secondNum + currentNum);
        console.log(currentNum);
        break;
      case '-':
        setCurrentNum(secondNum - currentNum);

        break;
      case '*':
        setCurrentNum(secondNum * currentNum);

        break;
      case '/':
        setCurrentNum(secondNum / currentNum);

        break;
      case '=':
        break;
    }
  }

  const onClickSymbol = (symbol) => {
    setCurrentSymbol(Symbol);
  };

  const onSecondNumber = (num) => {};

  const onClear = () => {
    setCurrentNum(0);
    setCurrentSymbol('');
    setSecondNum(0);
  };

  console.log(currentNum);
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
