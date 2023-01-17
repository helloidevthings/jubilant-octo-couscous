import styled from 'styled-components';

const Svg = styled.svg`
  circle {
    stroke: pink;
    stroke-width: 18;
  }
`;

const Circle = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 334 334">
    <circle cx={166.796} cy={166.993} r={157.519} />
  </Svg>
);

export default Circle;
