const radiant =
(angle,radius=1) => { return 2*Math.PI*radius*(angle/360); }

const safe_sin =
(angle) =>
{
	let val = Math.sin(radiant(angle));
	return (Math.abs(val)>(1e-2))*(val);
}

const safe_cos =
(angle) =>
{
	let val = Math.cos(radiant(angle));
	return (Math.abs(val)>(1e-2))*(val);
}