'use strict';

// The avg distance of each planet from the Sun in AU
const planetDistances = {
  Mercury: 0.39,
  Venus: 0.72,
  Earth: 1,
  Mars: 1.52,
  Jupiter: 5.2,
  Saturn: 9.58,
  Uranus: 19.22,
  Neptune: 30.05
};

// Calculates the distance between two planets
function calculateDistance(planet1, planet2) {
  // Capitalize planet names to match planetDistances
  planet1 = planet1.charAt(0).toUpperCase() + planet1.slice(1).toLowerCase();
  planet2 = planet2.charAt(0).toUpperCase() + planet2.slice(1).toLowerCase();

  // Calculates the difference in distances
  const distance = Math.abs(planetDistances[planet1] - planetDistances[planet2]);
  return distance;
}

module.exports = calculateDistance;