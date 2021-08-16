//const sumList = require("../functions.js");
//module.exports.Matrix = Matrix;

class Matrix
{
	constructor(rows, columns=1,d=1) // height holds number of rows, width holds number of columns
	{
		this.entries=["unedited"]; // array for pointers to other lists; this approach is necessary for keeping the matrix mutable
		for(let c=0;c<columns;c++)
		{
			let column_entries = ["unedited"]; // column_entries is a pointer
			for(let r=0;r<rows;r++) { column_entries[r] = (r==c)*d; } // column_entries[r] holds numbers for each r
			this.entries[c] = column_entries; //pointer to column_entries is saved in this.entries[c] for each c
		}
		///*debug*/console.log(`Matrix created with ${this.entries[0].length} rows and ${this.entries.length} columns.`);
	}
	static rows(m) { return m.entries[0].length; }
	static countRows = Matrix.rows;
	static columns(m) { return m.entries.length; }
	static countColumns = Matrix.columns;
	set(r,c,value) { this.entries[c-1][r-1] = value; }
	get(r,c) { return this.entries[c-1][r-1]; }
	setColumn(n,v) { for(let r=1;r<=v.length;r++) { this.set(r,n,v[r-1]); } }
	setCol = this.setColumn;
	setRow(n,v) { for(let c=1;c<=v.length;c++) { this.set(n,c,v[c-1]); } }
	getColumn(c) { let column=[]; for(let r=1;!(r>Matrix.rows(this));r++) { column[r-1] = this.get(r,c); }; return column; };
	getCol = this.getColumn;
	getRow(r) { let row=[]; for(let c=1;!(c>Matrix.columns(this));c++) { row[c-1] = this.get(r,c); }; return row; }
	static scalarMul (s,m) // s -scalar; m - matrix
	{
		let m1 = new Matrix(Matrix.rows(m),Matrix.columns(m));
		for(let c=1;!(c>Matrix.columns(m));c++)
		{
			for(let r=1;!(r>Matrix.rows(m));r++)
			{ m1.set(r,c,m.get(r,c)*s); }
		}
		return m1;
	}
	static mul (ml, mr) // ml - left matrix; mr - right matrix;
	{
		let m = new Matrix(Matrix.rows(ml), Matrix.columns(mr));
		for(let c=1;!(c>Matrix.columns(mr));c++)
		{
			let column = mr.getColumn(c);
			for(let r=1;!(r>Matrix.rows(ml));r++)
			{
				let row = ml.getRow(r);
				let value = 0;
				let product_list = [];
				for(let i=0;i<Matrix.columns(ml);i++) { product_list[i] = row[i]*column[i]; };
				///*debug*/console.log(`product_list = [${product_list}]`);
				value = sumList(product_list);
				m.set(r,c,value);
			}
		}
		return m;
	}
	static print (m)
	{
		for(let r=1;!(r>Matrix.rows(m));r++) { console.log(m.getRow(r)); }
		console.log();
	}
}
