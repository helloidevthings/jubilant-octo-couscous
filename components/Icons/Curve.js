import styled from 'styled-components';

const SVGWrap = styled.svg`
  transform: translateX(-100%);
  animation: curve ease-in-out 3s infinite alternate;
  transform-origin: center center;

  @keyframes curve {
    from {
      transform: translateX(-100px);
    }
    to {
      transform: translateX(0);
    }
  }

  path {
    fill: #273036;
  }
`;

const Curve = () => (
  <SVGWrap xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 78">
    <path d="M0 7.31s280.62 30 441 30c173 0 357.6-32.27 519-36.7 193-5.3 480 25.7 480 25.7v51H0v-70Z" />
  </SVGWrap>
);
export default Curve;
