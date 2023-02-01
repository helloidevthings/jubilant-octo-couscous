import styled from 'styled-components';

const Svg = styled.svg`
  circle {
    stroke-dashoffset: 10;
    stroke-dasharray: 1000;
    animation: draw 3s ease-in-out infinite alternate;
    stroke: pink;
  }

  @keyframes draw {
    from {
      stroke-dashoffset: 1000;
    }

    to {
      stroke-dashoffset: 0;
    }
  }
`;

const Circle = ({ props }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67" {...props}>
    <circle
      cx={33.5}
      cy={33.5}
      r={31.5}
      style={{
        fill: 'none',
        strokeMiterlimit: 10,
        strokeWidth: 4,
      }}
    />
  </Svg>
);

export default Circle;
