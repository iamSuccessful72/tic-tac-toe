function Square({ onSquareClick, value }: Props) {
  return value === "X" ? (
    <button
      className="border border-black focus:outline-none font-bold h-24 text-2xl text-red-500"
      onClick={onSquareClick}
      type="button"
    >
      {value}
    </button>
  ) : (
    <button
      className="border border-black focus:outline-none font-bold h-24 text-2xl text-blue-500"
      onClick={onSquareClick}
      type="button"
    >
      {value}
    </button>
  );
}

export type XoOrNull = null | "O" | "X";

interface Props {
  onSquareClick: () => void;
  value: XoOrNull;
}

export default Square;
