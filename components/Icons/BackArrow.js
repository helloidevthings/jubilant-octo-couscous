import styled from 'styled-components';

const WrapSVG = styled.svg`
  fill: var(--text);
  width: 1.5rem;
  height: 1.5rem;
`;

const BackArrow = () => (
  <WrapSVG
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
  >
    <path
      fill="#fff"
      d="M19.125 8.825H5.197l6.397-6.398L9.97.813.813 9.97l9.156 9.156 1.614-1.614-6.386-6.397h13.928v-2.29Z"
    />
  </WrapSVG>
);
export default BackArrow;
