class nBodyProblem {
	constructor(params){
		this.g=params.g;
		this.dt=params.dt;
		this.softeningConst=params.softeningConst;
		this.masses=params.masses;
	}

	updatePosVectors () {
		for (let i=0, massesLen=this.masses.length; i<massesLen;i++){
			const massI=this.masses[i];
			massI.x+=massI.vx*this.dt;
			massI.y+=massI.vy*this.dt;
			massI.z+=massI.vz*this.dt;
		}
		return this;
	}

	updateVelosityVectors () {
		for (let i=0, massesLen=this.masses.length; i<massesLen;i++){
			const massI=this.masses[i];
			massI.x+=massI.ax*this.dt;
			massI.y+=massI.ay*this.dt;
			massI.z+=massI.az*this.dt;
		}
	}

	updateAccelerationVectors () {
		const massesLen=this.masses.length;
		for (let i=0; i<massesLen;i++){
				let ax=0;
				let ay=0;
				let az=0;

				const massI=this.masses[i];

				for (let j=0; j<massesLen; j++){
					if (i!==j) {
						const massJ=this.masses[j];

						const dx=massJ.x-massI.x;
						const dy=massJ.y-massI.y;
						const dz=massJ.z-massI.z;

						const distSq = dx*dx+dy*dy+dz*dz;

						f=(this.g*massJ.m)/(distSq*Math.sqrt(distSq+this.softeningConst));

						ax+=dx*f;
						ay+=dy*f;
						az+=dz*f;
					}
				}
				massI.ax=ax;
				massI.ay=ay;
				massI.az=az;
			}
			return this;
		}
}


class Manifestation{
	constructor(ctx, trailLength, radius){
		this.ctx=ctx;
		this.trailLength=transient;
		this.radius=radius;
		this.positions=[];
	}
	storePosition(x,y){
		this.positions.push({x,y});
		if (this.positions.length>this.trailLength) 
			this.positions.shift();
	}
	draw(x,y){
		this.storePosition(x,y);
		for (let i=0, posLength=this.positions.length; i<posLength; i++){
			let transparency,circleScaleFactor;

			const scaleFactor = i/posLength;

			if (i===posLength-1) {
				transparency=1;
				circleScaleFactor=1;
			} else {
				transparency=scaleFactor/2;
				circleScaleFactor=scaleFactor;
			}

			this.ctx.beginPath();
			this.ctx.arc(
				this.positions[i].x, 
				this.positions[i].y, 
				this.scaleFactor*this.radius,
				0,
				2*Math.PI
			);
			this.ctx.fillStyle = `rgb(0,12,153,${this.transparency})`;
			this.ctx.fill();
			this.ctx.closePath();
		}
	}
}






const g=39.5,
	  dt=0.008,
	  softeningConst=0.15,

	  masses=[{
		name: 'Sun',
		// в качестве единицы массы используем солнечную, поэтому масса Солнца равна 1
		m: 1,
		x: -1.50324727873647e-6,
	    y: -3.93762725944737e-6,
	    z: -4.86567877183925e-8,
	    vx: 3.1669325898331e-5,
	    vy: -6.85489559263319e-6,
	    vz: -7.90076642683254e-7
		},
	    {
	      name: "Mercury",
	      m: 1.65956463e-7,
	      x: -0.346390408691506,
	      y: -0.272465544507684,
	      z: 0.00951633403684172,
	      vx: 4.25144321778261,
	      vy: -7.61778341043381,
	      vz: -1.01249478093275
	    },
	    {
	      name: "Venus",
	      m: 2.44699613e-6,
	      x: -0.168003526072526,
	      y: 0.698844725464528,
	      z: 0.0192761582256879,
	      vx: -7.2077847105093,
	      vy: -1.76778886124455,
	      vz: 0.391700036358566
	    },
	    {
	      name: "Earth",
	      m: 3.0024584e-6,
	      x: 0.648778995445634,
	      y: 0.747796691108466,
	      z: -3.22953591923124e-5,
	      vx: -4.85085525059392,
	      vy: 4.09601538682312,
	      vz: -0.000258553333317722
	    },
	    {
	      m: 3.213e-7,
	      name: "Mars",
	      x: -0.574871406752105,
	      y: -1.395455041953879,
	      z: -0.01515164037265145,
	      vx: 4.9225288800471425,
	      vy: -1.5065904473191791,
	      vz: -0.1524041758922603
	    }];



const innerSolarSys=new nBodyProblem({
	g,
	dt,
	masses: JSON.parse(JSON.stringify(masses)),
	softeningConst
});

innerSolarSys.updatePosVectors()
			 .updateAccelerationVectors()
			 .updateVelosityVectors();



const canvas = document.getElementById('canvas'),
	  ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth),
      height = (canvas.height = window.innerHeight);

const radius = 4,
	  scale = 70,
	  trailLength =35;


const poplateManifestations = masses => {
	masses.forEach(
		mass=>(mass['manifestation'] = new Manifestation(ctx,trailLength,radius))
	);
};

poplateManifestations(innerSolarSys.masses);