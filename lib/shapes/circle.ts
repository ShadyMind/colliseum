import { Point } from "./point";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";

export class Circle implements Shape {
    center: Point;
    radius: number;

    constructor(cx: number, cy: number, r: number) {
        this.move(cx, cy);
        this.radius = Math.abs(r);
    }

    move(cx: number, cy: number) {
        this.center = new Point(cx, cy);
    }

    reshape(r: number) {
        this.radius = Math.abs(r);
    }

    get points() {
        return Array.from({ length: 360 }).map((_, idx) => {
            return new Point(
                this.radius * Math.sin(idx),
                this.radius * Math.cos(idx)
            );
        });
    }

    get lines() { return [] }
    get bounds() { return new Rectangle(0,0,0,0) }
}