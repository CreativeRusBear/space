/**
 * @description Module for working and displaying a space scene
 * @module src/js/space
 * @see module: src/js/demonstration
 * @see module: src/js/body
 */

import {Manifestation} from './demonstration';
import {NBodyProblem} from './body';

/**
 * @class
 * @description Class for working and displaying a space scene
 * @example
 * ```js
 * const space = new Space();
 * space.settings();
 * space.actionsForInnerSolarSystem();
 * space.animate();
 * ```
 */
export class Space {
	/**
	 * @constructor
	 * @description Creating necessary objects and variables for further work with scene
	 */
	constructor () {
		this.g = 39.5;
		this.dt = 0.008;
		this.softeningConst = 0.15;
		this. masses = [ 
			{
				name : 'Sun',
				/* В качестве единицы массы используем солнечную, поэтому масса Солнца равна 1 */
				m    : 1,
				x    : -1.50324727873647e-6,
				y    : -3.93762725944737e-6,
				z    : -4.86567877183925e-8,
				vx   : 3.1669325898331e-5,
				vy   : -6.85489559263319e-6,
				vz   : -7.90076642683254e-7,
		
			}, 
			{
				name : 'Mercury',
				m    : 1.65956463e-7,
				x    : -0.346390408691506,
				y    : -0.272465544507684,
				z    : 0.00951633403684172,
				vx   : 4.25144321778261,
				vy   : -7.61778341043381,
				vz   : -1.01249478093275,
			}, 
			{
				name : 'Venus',
				m    : 2.44699613e-6,
				x    : -0.168003526072526,
				y    : 0.698844725464528,
				z    : 0.0192761582256879,
				vx   : -7.2077847105093,
				vy   : -1.76778886124455,
				vz   : 0.391700036358566,
			}, 
			{
				name : 'Earth',
				m    : 3.0024584e-6,
				x    : 0.648778995445634,
				y    : 0.747796691108466,
				z    : -3.22953591923124e-5,
				vx   : -4.85085525059392,
				vy   : 4.09601538682312,
				vz   : -0.000258553333317722,
			}, 
			{
				m    : 3.213e-7,
				name : 'Mars',
				x    : -0.574871406752105,
				y    : -1.395455041953879,
				z    : -0.01515164037265145,
				vx   : 4.9225288800471425,
				vy   : -1.5065904473191791,
				vz   : -0.1524041758922603,
			} 
		];

		this.massesList = document.querySelector('#masses-list');

		this.canvas = document.querySelector('#canvas');
		this.ctx = this.canvas.getContext('2d');

		this.setSceneSize();

		this.scale = 70;
		this.radius = 6;
		this.trailLength = 35;

		/* For user's press mouse*/
		this.mousePressX = 0;
		this.mousePressY = 0;

		/* Current position mouse on the screen*/
		this.currentMouseX = 0;
		this.currentMouseY = 0;

		/* Variable for define mouse move*/
		this.dragging = false;

		this.innerSolarSystem = new NBodyProblem({
			g              : this.g,
			dt             : this.dt,
			masses         : JSON.parse(JSON.stringify(this.masses)),
			softeningConst : this.softeningConst,
		});

		this.animate = this.animate.bind(this);
		this.loadOriginScene = this.loadOriginScene.bind(this);
		this.loadNewSpaceObj = this.loadNewSpaceObj.bind(this);
		this.mousedownEventHandler = this.mousedownEventHandler.bind(this);
		this.mousemoveEventHandler = this.mousemoveEventHandler.bind(this);
		this.setSceneSize = this.setSceneSize.bind(this);
	}

	/**
	 * @description Create `Manifestation` instances for the space masses 
	 * @param {Array.<Object>} masses - space objects (sun, planets and etc)
	 * @returns {void}
	 */
	populateManifestations (masses) {
		masses.forEach(mass =>
			mass['manifestation'] = new Manifestation(
				this.ctx,
				this.trailLength,
				this.radius,
			),
		);
	}


	/**
	 * @description Method for animate the space scene
	 * @returns {void}
	 */
	animate () {
		this.innerSolarSystem
			.updatePositionVectors()
			.updateAccelerationVectors()
			.updateVelocityVectors();

		this.ctx.clearRect(0, 0, this.width, this.height);

		for (let i = 0, massesLen = this.innerSolarSystem.masses.length; i < massesLen; i++) {
			const massI = this.innerSolarSystem.masses[i];

			const x = this.width / 2 + massI.x * this.scale;
			const y = this.height / 2 + massI.y * this.scale;

			massI.manifestation.draw(x, y);

			if (massI.name) {
				this.ctx.font = '16px Nunito Sans';
				this.ctx.fillText(massI.name, x + 12, y + 4);
				this.ctx.fill();
			}

			if (x < this.radius || x > this.width - this.radius) {
				massI.vx =- massI.vx;
			}
			if (y < this.radius || y > this.height - this.radius) {
				massI.vy =- massI.vy;
			}
		}
		if (this.dragging) {
			this.ctx.beginPath();
			this.ctx.moveTo(this.mousePressX, this.mousePressY);
			this.ctx.lineTo(this.currentMouseX, this.currentMouseY);
			this.ctx.strokeStyle = `rgb(0, ${Math.floor(Math.random() * (175 - 45 + 1)) + 45}, 153)`;
			this.ctx.stroke();
		}
		requestAnimationFrame(this.animate);
	}

	/**
	 * @description Run actions for the solar system
	 * @returns {void}
	 */
	actionsForInnerSolarSystem () {
		this.innerSolarSystem.updatePositionVectors()
			.updateAccelerationVectors()
			.updateVelocityVectors();
		this.populateManifestations(this.innerSolarSystem.masses);
	}


	/**
	 * @description Loads starter scene
	 * @returns {void}
	 */
	loadOriginScene () {
		this.innerSolarSystem.masses = JSON.parse(JSON.stringify(this.masses));
		this.populateManifestations(this.innerSolarSystem.masses);
		
	}

	/**
	 * @description Adds new space object on the scene
	 * @param {Object} e - mouseup event object
	 * @returns {void}
	 */
	loadNewSpaceObj ({clientX, clientY}) {
		const x = (this.mousePressX - this.width / 2) / this.scale;
		const y = (this.mousePressY - this.height / 2) / this.scale;
		const z = 0;
		const vx = (clientX - this.mousePressX) / 35;
		const vy = (clientY - this.mousePressY) / 35;
		const vz = 0;

		this.innerSolarSystem.masses.push({
			name          : this.massesList.selectedOptions[0].label,
			m             : parseFloat(this.massesList.value),
			x,
			y,
			z,
			vx,
			vy,
			vz,
			manifestation : new Manifestation(this.ctx, this.trailLength, this.radius),
		});
		this.dragging = false;
	}

	/**
	 * @description List of event listeners for work with scene
	 * @returns {void}
	 */
	settings () {
		document.querySelector('#reset-btn').addEventListener('click', this.loadOriginScene);
		this.canvas.addEventListener('mousedown', this.mousedownEventHandler);
		this.canvas.addEventListener('mousemove', this.mousemoveEventHandler);
		this.canvas.addEventListener('mouseup', this.loadNewSpaceObj);
		window.addEventListener('resize', this.setSceneSize);
	}

	/**
	 * @description Set/update values for `mousePressX`, `mousePressY` and `dragging`
	 * @param {Object} e - mousedown event object
	 * @returns {void}
	 */
	mousedownEventHandler({clientX, clientY}){
		this.mousePressX = clientX;
		this.mousePressY = clientY;
		this.dragging = true;
	}

	/**
	 * @description Set/update values for `currentMouseX`, `currentMouseY`
	 * @param {Object} e - mousemove event object 
	 * @returns {void}
	 */
	mousemoveEventHandler({clientX, clientY}){
		this.currentMouseX = clientX;
		this.currentMouseY = clientY;
	}

	/**
	 * @description Set/update values for canvas width and height, and also for `width` and `height` variables
	 * @returns {void}
	 */
	setSceneSize(){
		this.width = this.canvas.width = window.innerWidth;
		this.height = this.canvas.height = window.innerHeight;
	}
}