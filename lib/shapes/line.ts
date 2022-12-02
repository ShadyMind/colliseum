import { Point } from './point';
import { Rectangle } from './rectangle';
import { ShapeStruct } from './shape';

export class Line implements ShapeStruct {
    public start: Point;
    public end: Point;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.reshape(x1, y1, x2, y2);
    }

    static from(input: Line): Line | null {
        if (input instanceof Line) {
            const [start, end] = input.points;

            return new Line(start.x, start.y, end.x, end.y);
        }

        return null;
    }

    reshape(x1: number, y1: number, x2: number, y2: number) {
        /* check given points for farest */
        if (x2 < x1 || y2 < y1) {
            /* swap points if 2 > 1 */
            this.start = new Point(x2, y2);
            this.end = new Point(x1, y1);
        } else {
            this.start = new Point(x1, y1);
            this.end = new Point(x2, y2);
        }
    }

    move(x: number, y: number) {
        this.reshape(
            this.start.x + x,
            this.start.y + y,
            this.end.x + x,
            this.end.y + y
        );
    }

    public get points() {
        return [this.start, this.end];
    }

    public get lines() {
        return [new Line(this.start.x, this.start.y, this.end.x, this.end.y)];
    }

    public get bounds() {
        return new Rectangle(this.start.x, this.start.y, this.end.x, this.end.y);
    }
}