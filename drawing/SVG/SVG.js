class SVG
{
	static id = 0; // id and index in the lists are not identical
	static basic_size = 10; // shall be constant
	static basic_distance = 20; // shall be constant; is the assumed distance of the viewer from the xy-plane, where every body is projected to
	static z0 = SVG.basic_distance;
	constructor(){};
	static from_Matrix (vector,) //z0 is the position of the point you are watching everything from in the direction of the decreasing z-axis
	{
		// no way to distinguish between a point and a vector so draw a point
		return Point.from_Matrix(vector);
	}
	static from_Matrix_homogen (vector,id=undefined)
	{
		let dim = Matrix.rows(vector); // dim - dimension
		let reduced_vector;
		if (vector.get(dim,1)==1) // interpreted as point
		{
			if (dim==3) // vector repesents 2D point
			{
				reduced_vector = new Matrix(2);
				reduced_vector.set(1,1,vector.get(1,1));
				reduced_vector.set(2,1,vector.get(2,1));
			}
			else if (dim==4) // vector repesents 3D point
			{
				reduced_vector = new Matrix(3);
				reduced_vector.set(1,1,vector.get(1,1));
				reduced_vector.set(2,1,vector.get(2,1));
				reduced_vector.set(3,1,vector.get(3,1));
			}
			else { throw new Error("Invalid dimension!"); }
			return Point.from_Matrix(reduced_vector,id); // since Matrix.rows(reduced_vector) equals 2, the point will be drawn without the need for projection to the xy-plane
		}
		else if (vector.get(dim,1)==0) // interpreted as vector
		{
			// project staring point and end point and draw a line between those points
		}
		else { throw new Error("Invalid w-component!"); }
	}
}