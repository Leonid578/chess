import React, { FC } from "react";
import CellComponent from "./CellComponent";
import { Board } from "../models/Board";
// import { Cell } from "../models/Cell";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}
const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  return (
    <div className="board">
      {board.cells.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map(cell =>  
            <CellComponent cell={cell} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
