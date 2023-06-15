import { useState } from "react";
import { checkWinner } from "../functions/functions";
import { XoOrNull } from "./Square";
import Board from "./Board";
import GameProgress from "./GameProgress";

function Game() {
  const [squares, setSquares] = useState<XoOrNull[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const winner = checkWinner(squares);

  return (
    <div className="font-tsukimi-rounded">
      <h1 className="font-bold text-2xl text-center">Tic tac toe</h1>
      <div className="lg:w-2/4 mx-auto">
        <Board
          setSquares={setSquares}
          setXIsNext={setXIsNext}
          squares={squares}
          xIsNext={xIsNext}
        />
        {squares.every((item) => item === null) ? null : (
          <GameProgress
            setSquares={setSquares}
            squares={squares}
            winner={winner}
            xIsNext={xIsNext}
          />
        )}
      </div>
    </div>
  );
}

export default Game;
