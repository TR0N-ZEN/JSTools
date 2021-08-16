class Transformation
{
	static scale(dimension, scalar_diagonal) // scalar_diagonal is a list of the entries in the diagonal of the matrix; dim must be equal to scalar_diagonal.length;
	{
		let m = new Matrix(dimension,dimension);
		for(let i=1;!(i>dimension);i++) { m.set(i,i,scalar_diagonal[i-1]); }
		return m;
	}
	static shear_y_2D(s)
	{
		let m = new Matrix(2,2);
		m.set(1,2,s);
		return m;
	}
	static rotation_2D(angle)
	{
		let m = new Matrix(2,2);
		m.set(1,1,safe_cos(angle)); m.set(1,2,(-1)*safe_sin(angle));
		m.set(2,1,safe_sin(angle)); m.set(2,2,safe_cos(angle));
		return m;
	}
	static rotation_3D(axis="z",angle=0, homogenius=false)
	{
		let m;
		if (homogenius) { m = new Matrix(4,4); }
		else { m = new Matrix(3,3); };
		switch(axis)
		{//imagine looking in the direction of the head of the axis you turn around and now turn the other two axies counterclockwise
			case("z"):
				m.set(1,1,safe_cos(angle)); 			m.set(1,2,safe_sin(angle));
				m.set(2,1,(-1)*safe_sin(angle)); 	m.set(2,2,safe_cos(angle));
				break;
			case("y"):
				m.set(1,1,safe_cos(angle)); 	m.set(1,3,(-1)*safe_sin(angle));
				m.set(3,1,safe_sin(angle)); 	m.set(3,3,safe_cos(angle));
				break;
			case("x"):
				m.set(2,2,safe_cos(angle));				m.set(2,3,safe_sin(angle));
				m.set(3,2,(-1)*safe_sin(angle)); 	m.set(3,3,safe_cos(angle));
				break;
		}
		return m;
	}
	static to_homogenius (m0)
	{
		let m1 = new Matrix(Matrix.rows(m0)+1,Matrix.columns(m0)+1);
		for (let c=1;!(c>Matrix.columns(m0));c++)
		{
			for(let r=1;!(r>Matrix.rows(m0));r++)
			{
				m1.set(r,c,m0.get(r,c));
			}
		}
		return m1;
	}
};