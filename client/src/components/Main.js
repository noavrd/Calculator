import Action from './Action';
import Number from './Number';
export default function Main() {
  const symbols = ['/', '*', '-', '+'];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {symbols.map((element, i) => (
        <div className="symbols">
          <Action symbol={element} key={i} />
        </div>
      ))}
      {numbers.map((element, i) => (
        <div className="numbers">
          <Number eachNum={element} key={i} />
        </div>
      ))}
      <div>Clear</div>
    </>
  );
}
