import { checkWinner } from "../functions/functions";
import Square, { XoOrNull } from "./Square";

function Board({ setSquares, setXIsNext, squares, xIsNext }: Props) {
  const handleClick = (index: number): void => {
    if (squares[index] || checkWinner(squares)) {
      return;
    }
    const nextSquare = [...squares];
    nextSquare[index] = xIsNext ? "X" : "O";
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="border border-black grid grid-cols-3 m-4 md:mx-auto w-96">
      {squares.map((value, index) => (
        <Square
          key={index}
          onSquareClick={() => handleClick(index)}
          value={value}
        />
      ))}
    </div>
  );
}

interface Props {
  setSquares: React.Dispatch<React.SetStateAction<XoOrNull[]>>;
  setXIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  squares: XoOrNull[];
  xIsNext: boolean;
}

export default Board;
