/**
 * @description Module for working with a space objects
 * @module src/js/body
 */

/**
 * @class
 * @description Class for working with a space object
 * @example
 * this.innerSolarSystem = new NBodyProblem({
 *	g              : this.g,
 *	dt             : this.dt,
 *	masses         : JSON.parse(JSON.stringify(this.masses)),
 *	softeningConst : this.softeningConst,
 *});
 * this.innerSolarSystem
 * 	.updatePositionVectors()
 *	.updateAccelerationVectors()
 *	.updateVelocityVectors();
 */
export class NBodyProblem {
	/**
	 * @constructor
	 * @param {Object} params - necessary data for creating a space objects
	 */
	constructor (params) {
		this.g = params.g;
		this.dt = params.dt;
		this.softeningConst = params.softeningConst;
		this.masses = params.masses;
	}

	/**
	 * @description update vectors position values
	 * @return {NBodyProblem} - instance of class
	 */
	updatePositionVectors () {
		for (let i = 0, massesLen = this.masses.length; i < massesLen; i++) {
			const massI = this.masses[i];
			massI.x += massI.vx * this.dt;
			massI.y += massI.vy * this.dt;
			massI.z += massI.vz * this.dt;
		}
		return this;
	}

	/**
	 * @description update vectors velocity values
	 */
	updateVelocityVectors () {
		for (let i = 0, massesLen = this.masses.length; i < massesLen; i++) {
			const massI = this.masses[i];
			massI.vx += massI.ax * this.dt;
			massI.vy += massI.ay * this.dt;
			massI.vz += massI.az * this.dt;
		}
	}

	/**
	 * @description update vectors acceleration values
	 * @return {NBodyProblem} - instance of class
	 */
	updateAccelerationVectors () {
		for (let i = 0, massesLen = this.masses.length; i < massesLen; i++) {
			let ax = 0, ay = 0, az = 0;

			const massI = this.masses[i];

			for (let j = 0; j < massesLen; j++) {
				if (i !== j) {
					const massJ = this.masses[j];
					const dx = massJ.x - massI.x;
					const dy = massJ.y - massI.y;
					const dz = massJ.z - massI.z;
					const distSq = dx * dx + dy * dy + dz * dz;

					const f =this.g * massJ.m /(distSq * Math.sqrt(distSq + this.softeningConst));
					ax += dx * f;
					ay += dy * f;
					az += dz * f;
				}
			}
			massI.ax = ax;
			massI.ay = ay;
			massI.az = az;
		}
		return this;
	}
}