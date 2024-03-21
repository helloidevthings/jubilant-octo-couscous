import styled from 'styled-components';

const SVGNoise = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  mix-blend-mode: overlay;
`;

const SvgComponent = ({ customDark }) => (
  <SVGNoise xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700">
    <defs>
      <filter
        id="a"
        width="140%"
        height="140%"
        x="-20%"
        y="-20%"
        colorInterpolationFilters="linearRGB"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
      >
        <feTurbulence
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          baseFrequency={0.2}
          numOctaves={4}
          result="turbulence"
          seed={15}
          stitchTiles="stitch"
          type="fractalNoise"
        />
        <feSpecularLighting
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          in="turbulence"
          lightingColor="#6b00ff"
          result="specularLighting"
          specularConstant={1.1}
          specularExponent={20}
          surfaceScale={14}
        >
          <feDistantLight azimuth={3} elevation={66} />
        </feSpecularLighting>
      </filter>
    </defs>
    <path fill="#00000000" d="M0 0h700v700H0z" />
    <path fill="#6b00ff" d="M0 0h700v700H0z" filter="url(#a)" />
  </SVGNoise>
);
export default SvgComponent;
