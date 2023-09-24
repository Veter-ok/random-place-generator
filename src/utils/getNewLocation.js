export const getNewLocation = (s, α1, φ1, λ1) => {
	φ1 = ConvertToRadians(φ1)
	λ1 = ConvertToRadians(λ1)

	const a = 6378137.0
	const f = 1/298.257223563
	const b = 6356752.314245
	
	const sinα1 = Math.sin(α1);
	const cosα1 = Math.cos(α1);

	const tanU1 = (1-f) * Math.tan(φ1), cosU1 = 1 / Math.sqrt((1 + tanU1*tanU1)), sinU1 = tanU1 * cosU1;
	const σ1 = Math.atan2(tanU1, cosα1); // σ1 = angular distance on the sphere from the equator to P1
	const sinα = cosU1 * sinα1;          // α = azimuth of the geodesic at the equator
	const cosSqα = 1 - sinα*sinα;
	const uSq = cosSqα * (a*a - b*b) / (b*b);
	const A = 1 + uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));
	const B = uSq/1024 * (256+uSq*(-128+uSq*(74-47*uSq)));

	let σ = s / (b*A), sinσ = null, cosσ = null; // σ = angular distance P₁ P₂ on the sphere
	let cos2σₘ = null; // σₘ = angular distance on the sphere from the equator to the midpoint of the line

	let σʹ = null;
	do {
		cos2σₘ = Math.cos(2*σ1 + σ);
		sinσ = Math.sin(σ);
		cosσ = Math.cos(σ);
		const Δσ = B*sinσ*(cos2σₘ+B/4*(cosσ*(-1+2*cos2σₘ*cos2σₘ)-B/6*cos2σₘ*(-3+4*sinσ*sinσ)*(-3+4*cos2σₘ*cos2σₘ)));
		σʹ = σ;
		σ = s / (b*A) + Δσ;
	} while (Math.abs(σ-σʹ) > 1e-12);

	const x = sinU1*sinσ - cosU1*cosσ*cosα1;
	const φ2 = Math.atan2(sinU1*cosσ + cosU1*sinσ*cosα1, (1-f)*Math.sqrt(sinα*sinα + x*x));
	const λ = Math.atan2(sinσ*sinα1, cosU1*cosσ - sinU1*sinσ*cosα1);
	const C = f/16*cosSqα*(4+f*(4-3*cosSqα));
	const L = λ - (1-C) * f * sinα * (σ + C*sinσ*(cos2σₘ+C*cosσ*(-1+2*cos2σₘ*cos2σₘ)));
	const λ2 = λ1 + L;

	const α2 = Math.atan2(sinα, -x); // final bearing
	return [ConvertToDegrees(φ2), ConvertToDegrees(λ2), α2]
}

const ConvertToRadians = (degrees) => {
	return degrees *  Math.PI / 180
}

const ConvertToDegrees = (radians) => {
	return radians * 180 / Math.PI
}