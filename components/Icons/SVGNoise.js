import React from 'react';

const SVGNoise = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
    <filter id="a">
      <feTurbulence
        baseFrequency={3}
        numOctaves={3}
        stitchTiles="stitch"
        type="fractalNoise"
      />
    </filter>
    <rect width="100%" height="100%" filter="url(#a)" />
  </svg>
);
export default SVGNoise;
