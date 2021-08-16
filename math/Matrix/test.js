(function main()
{
	var stage = 1;
	var max = 10;
	var subjects = [];
	do {
		console.log();   /* for new line between stages */
		console.log(`stage ${stage}`);
	} while(test(stage++,subjects) && stage<=max);
})();

function test(stage,s)
{
	switch(stage)
	{
		case(10):
		// stage 10
			s[0].set(1,1,2);
			s[0].set(2,1,3);
			s[0].set(3,1,5);
			
			s[0].set(1,2,7);
			s[0].set(2,2,11);
			s[0].set(3,2,13);
			
			s[0].set(1,3,17);
			s[0].set(2,3,23);
			s[0].set(3,3,29);
			Matrix.print(s[0]);
			s[1].set(3,3,2);
			Matrix.print(s[1]);
			s[2] = Matrix.mul(s[0],s[1]);
			Matrix.print(s[2]);
			return true;
		case(9):
		// stage 9
			s[0].set(1,2,2);
			s[0].set(1,3,3);
			s[0].set(2,1,4);
			s[0].set(2,2,5);
			s[0].set(2,3,6);
			s[0].set(3,1,7);
			s[0].set(3,2,8);
			s[0].set(3,3,9);
			Matrix.print(s[0]);
			Matrix.print(s[1]);
			s[2] = Matrix.mul(s[0],s[1]);
			Matrix.print(s[2]);
			return true;
		case(8):
		// stage 8 (muling two neutral matricies)
			s[0] = new Matrix(3,3);
			Matrix.print(s[0]);
			s[1] = new Matrix(3,3);
			Matrix.print(s[1]);
			s[2] = Matrix.mul(s[0],s[1]);
			Matrix.print(s[2]);
			return true;
		case(7):
		// stage 7
			Matrix.print(s[0]);
			Matrix.print(s[1]);
			Matrix.print(s[2]);
			return true;
		case(6):
		// stage 6
			let v1 = new Matrix(1,3);
			console.log(v1.getRow(1));
			let v2 = new Matrix(3,1);
			console.table(v2.getColumn(1));
			let m1 = Matrix.mul(v1,v2);
			console.log(m1.get(1,1));
			return true;
		case(5):
		// stage 5
			let list = [1,2,5,1,24];
			console.log(`sumList(${list}) = ${sumList(list)}`);
			return true;
		case(4):
		// stage 4
			console.log(s[0].getRow(1));
			console.table(s[0].getColumn(1));
			console.log();
			console.log(s[1].getRow(1));
			console.log(s[1].getRow(2));
			console.table(s[1].getColumn(1));
			console.table(s[1].getColumn(2));
			console.log();
			console.log(s[2].getRow(3));
			console.log(s[2].getRow(5));
			return true;
		case(3):
			// stage 3 (testing "static rows()" and "static columns()")
			console.log(Matrix.rows(s[0]));
			console.log(Matrix.columns(s[0]));
			console.log();
			console.log(Matrix.rows(s[1]));
			console.log(Matrix.columns(s[1]));
			console.log();
			console.log(Matrix.rows(s[2]));
			console.log(Matrix.columns(s[2]));
			return true;
		case(2):
			// stage 2 (testing "get()" and "set()")
			s[0].set(1,1,99); //set(row, column)
			s[0].set(2,1,9); //set(row, column)
			s[1].set(2,2,99);
			console.log(s[0].get(1,1)); //get(row, column)
			console.log(s[0].get(2,1));
			console.log();
			console.log(s[1].get(1,1));
			console.log(s[1].get(1,2));
			console.log(s[1].get(2,1));
			console.log(s[1].get(2,2));
			console.log();
			console.log(s[2].get(3,3));
			console.log(s[2].get(5,3));
			return true;
		case(1):
			// stage 1 (testing "constructor")
			s[0] = new Matrix(2); // is mathematically speaking a vector but also a 2x1 matrix, 2 rows x 1 column
			s[1] = new Matrix(2,2); // 2 rows x 2 columns
			s[2] = new Matrix(5,3); // 5 rows x 3 columns
			return true;
		default:
			return false;
	}
};