import { Board } from './Board';
import {Colors} from './Colors';
import {Figure} from './figures/Figures';

export class Cell{
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean; // Можешь ли переместиться 
    id: number; //Для реакт ключей


    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null){
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = Math.random();
    }

    // // Установить фигуру на клетку
    // setFigure(figure: Figure) {
    //     this.figure = figure;
    // }

    // // Убрать фигуру с клетки
    // removeFigure() {
    //     this.figure = null;
    // }

    // // Проверить доступность клетки для хода
    // isAvailable(): boolean {
    //     return this.available && this.figure === null;
    // }

    // // Подсветить клетку
    // highlight() {
    //     this.highlighted = true;
    // }

    // // Снять подсветку
    // unhighlight() {
    //     this.highlighted = false;
    // }
}