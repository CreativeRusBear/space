/**
 * @description Module for drawing a space object
 * @module src/js/demonstration
 */

/**
 * @class
 * @description Class for drawing a space object
 * @example
 * masses.forEach(mass =>
 *	mass['manifestation'] = new Manifestation(
 *		this.ctx,
 *		this.trailLength,
 *		this.radius,
 *	),
 * );
 */
export class Manifestation {
	/**
	 * @constructor
	 * @description Necessary data for further work with the drawing of a space object
	 * @param {Object} ctx - canvas's context
	 * @param {Number} trailLength - trails count
	 * @param {Number} radius - object's radius
	 */
	constructor (ctx, trailLength, radius) {
		this.ctx = ctx;
		this.trailLength = trailLength;
		this.radius = radius;
		this.positions = [];
	}

	/**
	 * @description Load new object's trail
	 * @param {Number} x - abscissa
	 * @param {Number} y - ordinate
	 */
	storePosition (x, y) {
		this.positions.push({x, y});
		this.positions.length > this.trailLength && this.positions.shift();
	}

	/**
	 * @description Drawing a space object
	 * @param {Number} x - abscissa
	 * @param {Number} y - ordinate
	 */
	draw (x, y) {
		this.storePosition(x, y);
		for (let i = 0, positionsLen = this.positions.length; i < positionsLen; i++) {
			let transparency, circleScaleFactor;
			const scaleFactor = i / positionsLen;
			if (i === positionsLen - 1) {
				transparency = 1;
				circleScaleFactor = 1;
			} else {
				transparency = scaleFactor / 2;
				circleScaleFactor = scaleFactor;
			}

			this.ctx.beginPath();
			this.ctx.arc(this.positions[i].x, this.positions[i].y, circleScaleFactor * this.radius, 0, 2 * Math.PI);
			this.ctx.fillStyle = `rgba(103, 102, ${Math.floor(Math.random() * (197 - 25 + 1)) + 25}, ${transparency})`;
			this.ctx.fill();
		}
	}
}