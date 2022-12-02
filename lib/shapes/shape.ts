import { Line } from "./line";
import { Point } from "./point";
import { Rectangle } from "./rectangle";

export interface ShapeStruct {
    move(...coords: number[]): void;
    reshape(...coords: number[]): void;
    points: Point[];
    lines: Line[];
    bounds: Rectangle;
}

export class Shape implements ShapeStruct {
    points: Point[];
    lines: Line[];
    bounds: Rectangle;

    constructor() {
        this.points = [];
        this.lines = [];
        this.bounds = new Rectangle(0, 0, 0, 0);
    };

    move(...args: number[]) {
        throw new TypeError('Method should be implemented');
    }
    
    reshape(...args: number[]) {
        throw new TypeError('Method should be implemented');
    }
}