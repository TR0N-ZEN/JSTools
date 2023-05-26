
const sum = (xs) =>
{
	let sum = 0;
	for (let i=0;i<xs.length;i++) { sum = sum + xs[i]; }
	return sum;
}
module.exports.sum = sum;

const mul = (a,b) => { return a*b; }
module.exports.mul = mul;

const map = (f, xs) =>
{
	let ys = [];
	for (let i=0;i<xs.length;i++) { ys[i] = f (xs[i]);}
	return ys
}
module.exports.map = map;

/**
 * @param {function name(Object, Object) {
	
 }} 
 * @param {Object[]} array 
 * @param {Object[]} array 
 * @returns random element of the array
*  */ 
const merge = (f, xs, ys) =>
{
	if (xs.length!=ys.length) return 0;
	let zs = [];
	for (let i=0;i<xs.length;i++) { zs[i] = f(xs[i],ys[i]);}
	return zs;
}
module.exports.merge = merge;

const mod = require("../math/mod.js").mod;
const get_random_element = (/*array*/array) => array[
	mod(
		Math.floor(Math.random() * array.length),
		array.length
	)
]
module.exports.get_random_element = get_random_element;


