class Vector extends SVG // SVG orperates in 2D only
{
	static vectors = [];
	constructor(p1=new Point(SVG.basic_distance,SVG.basic_distance),p0=new Point(0,0))
	{
		super();
		this.dx = p1.x-p0.x;
		this.dy = p1.y-p0.y;
		this.p0 = p0;
		this.id = p0.id; // the starting point and the line of a vector have the same id since they belong to the same vector
		Vector.vectors.push(this);
	}
	static from_Matrix(matrix)
	{
		let dim = Matrix.rows(matrix); // dim - dimension
		if (dim==2)
		{
			let p1 = new Point(matrix);
			let v = new Vector(p1);
		}
		if (dim==3)
		{
			throw new Error("Projection from 2D to 3D not yet implemented.");
		}
	}
	static draw (vector,color="orange",svg_container=document.getElementById("coordinate_system"))
	{
		Point.draw(vector.p0);
		svg_container.innerHTML += `<line class="${vector.id} vector" x1="${vector.p0.x}" y1="${vector.p0.y*(-1)}" x2="${vector.p0.x+vector.dx}" y2="${(vector.p0.y+vector.dy)*(-1)}" stroke="${color}" stroke-width="0.2" transform="matrix(1 0 0 1 0 0)"></line>`;
	}
	static redraw (v,color="orange",r=0.5,svg_container=document.getElementById("coordinate_system"))
	{
		Point.redraw(v.p0,color,r,svg_container);
		let e = svg_container.getElementsByClassName(`${v.id} vector`).item(0);
		e.setAttribute("x1", `${v.p0.x}`);
		e.setAttribute("y1", `${v.p0.y*(-1)}`);
		e.setAttribute("x2", `${v.p0.x+v.dx}`);
		e.setAttribute("y2", `${(v.p0.y+v.p0.y+v.dy)*(-1)}`);
		e.setAttribute("stroke", `${color}`);
	}
}