import { Line } from './line';
import { Point } from './point';

export class Rectangle extends Line {
    get points() {
        const [p1, p4] = super.points;

        return [
            p1,
            new Point(p1.x, p4.y),
            new Point(p4.x, p1.y),
            p4
        ];
    }

    get lines() {
        return this.points.map((p1, idx, points) => {
            const p2 = points[idx + 1] || points[0];
            return new Line(p1.x, p1.y, p2.x, p2.y);
        });
    }
}