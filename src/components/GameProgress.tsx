import { FaRedo } from "react-icons/fa";
import { XoOrNull } from "./Square";

function GameProgress({ setSquares, squares, winner, xIsNext }: Props) {
  const handleClick = (): void => {
    setSquares(Array(9).fill(null));
  };

  return (
    <div className="flex items-center justify-between mx-auto my-4 w-96">
      <p>
        {squares.every((square) => square != null) && !winner
          ? `Game is a draw!!`
          : winner
          ? `Player ${winner} won!!`
          : `Player ${xIsNext ? "X" : "O"} is Next`}
      </p>
      <button
        className="flex font-bold items-center p-2 rounded"
        onClick={handleClick}
        type="button"
      >
        <span className={winner ? "animate-spin" : ""}>
          <FaRedo />
        </span>
        <span className="ml-2">Restart</span>
      </button>
    </div>
  );
}

interface Props {
  setSquares: React.Dispatch<React.SetStateAction<XoOrNull[]>>;
  squares: XoOrNull[];
  winner: null | string;
  xIsNext: boolean;
}

export default GameProgress;
