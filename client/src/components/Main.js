import Action from './Action';
import Number from './Number';
export default function Main() {
  const symbols = ['/', '*', '-', '+'];
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
  return (
    <>
      <div className="show-clicked"></div>
      <div className="symbols-container">
        {symbols.map((element, i) => (
          <div className="symbol">
            <Action symbol={element} key={i} />
          </div>
        ))}
      </div>

      <div className="numbers-container">
        {numbers.map((element, i) => (
          <div className="number">
            <Number eachNum={element} key={i} />
          </div>
        ))}
      </div>

      <div>Clear</div>
    </>
  );
}
