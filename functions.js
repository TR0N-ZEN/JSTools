
const sumList = (xs) =>
{
	let sum = 0;
	for (let i=0;i<xs.length;i++) { sum += xs[i]; }
	return sum;
}
module.exports.sumList = sumList;


const map = (f, xs) =>
{
	let ys = [];
	for (let i=0;i<xs.length;i++) { ys[i] = f(xs[i]); }
	return ys
}
module.exports.map = map;


const mod = require("./math/mod.js").mod;
module.exports.mod = mod;
const getRandomElement = (/*array*/array) =>
{
	let index = mod(Math.floor(Math.random() * array.length), array.length);
	return array[index];
}
module.exports.get_random_element = get_random_element;