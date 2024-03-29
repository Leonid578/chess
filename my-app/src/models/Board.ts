import {Cell} from "./Cell";


export class Board {
    cells: Cell[][]=[]


    public initCells() {
        for(let i=0; i < 8; I++) {
            const row: Cell[] = []
            for(let j=0; j < 8; j++){
                if ((i + j) % 2 !== 0){
                    row.push(new Cell(this, j, i, Colors.BLACK, figure: null )) //Черные ячейки
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, figure: null)) // белые ячейки
                }
            }
        }
    }
}