class Point extends SVG // SVG orperates in 2D only
{
	static points = [];
	constructor(x,y,id=undefined)
	{
		super();
		if (id!=undefined) { this.id = id; }
		else { this.id = SVG.id++ };
		this.x = x;
		this.y = y;
		Point.points.push(this);
	}
	static from_Matrix (matrix,id=undefined)
	{
		let dim = Matrix.rows(matrix); // dim - dimension
		if (dim==2) // 2D vector not in homogenius form
		{ return new Point(matrix.get(1,1),matrix.get(2,1)); }
		else if (dim==3) //3D vector not in homogenius form
		{
			// projection to 2D more exactly to the xy-plane with distance SVG.z0 of the viewer to the xy-plane
			
			// projection described as transformation by a matrix, so it is technically closer to the hardware and allows for better parralleisation if prgrammed close to hardware
					// let mp = new Matrix(4,4);
					// mp.set(1,1,SVG.z0); mp.set(2,2,SVG.z0); mp.set(3,3,0);
					// mp.set(4,3,-1); mp.set(4,4,SVG.z0);
					// let pp = Matrix.multiply(mp,vector);
					// let xp = pp.get(1,1)/pp.get(4,1);
					// let yp = pp.get(2,1)/pp.get(4,1);
			// projection described briefly - forces sequential operation even if programmed close to the hardware
				let z = matrix.get(3,1);
				let xp = (matrix.get(1,1)*SVG.z0)/(SVG.z0-z);
				let yp = (matrix.get(2,1)*SVG.z0)/(SVG.z0-z);
				if(id!=undefined) { return new Point(xp,yp,id); }
				else { return new Point(xp,yp); }
		}
	}
	static draw (p,color="orange",r=0.5,svg_container=document.getElementById("coordinate_system"))
	{
		svg_container.innerHTML += `<circle class="${p.id} point" cx="${p.x}" cy="${p.y*(-1)}" r="${r}" fill="${color}" stroke="${color}" stroke-width="0.5" transform="matrix(1 0 0 1 0 0)"></line>`;
	}
	static redraw (p,color="orange",r=0.5,svg_container=document.getElementById("coordinate_system"))
	{
		let e = svg_container.getElementsByClassName(`${p.id} point`).item(0);
		e.setAttribute("cx", `${p.x}`);
		e.setAttribute("cy", `${p.y*(-1)}`);
		e.setAttribute("r", `${r}`);
		e.setAttribute("fill", `${color}`);
		e.setAttribute("stroke", `${color}`);
	}
}