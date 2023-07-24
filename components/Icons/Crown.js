import styled from 'styled-components';

const CrownWrap = styled.svg`
  padding: 0 0 25px 0;
`;

const Crown = () => {
  return (
    <CrownWrap
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 46 29"
    >
      <path
        fill="#fff"
        d="m.431 4.091 2.304 22.687c.08.781.738 1.376 1.523 1.376h37.484c.785 0 1.443-.595 1.523-1.376L45.569 4.09c.145-1.429-1.58-2.253-2.6-1.242l-7.392 7.32c-.596.59-1.558.59-2.154 0L24.077.913a1.53 1.53 0 0 0-2.154 0l-9.346 9.256c-.596.59-1.558.59-2.154 0l-7.391-7.32C2.012 1.838.286 2.662.432 4.09Z"
      />
    </CrownWrap>
  );
};
export default Crown;
