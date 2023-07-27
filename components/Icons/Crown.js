import styled from 'styled-components';

const CrownWrap = styled.svg`
  /* padding: 0 0 25px 0; */
`;

const Crown = () => {
  return (
    <CrownWrap
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 18"
    >
      <path
        fill="#fff"
        d="m20.25 7.3-.003-.002-6.59-6.845a.218.218 0 0 0-.314 0L6.91 7.136a.218.218 0 0 1-.314 0L.434.742A.218.218 0 0 0 .06.913l1.608 16.6c.01.112.105.197.217.197H25.11a.218.218 0 0 0 .217-.197l1.611-16.6a.218.218 0 0 0-.373-.172l-6.313 6.557a.005.005 0 0 1-.003.001Zm-6.521 7.497a.218.218 0 0 1-.315 0L9.562 10.76a.218.218 0 0 1 0-.3l3.852-4.039a.217.217 0 0 1 .315 0l3.851 4.038c.08.084.08.217 0 .3l-3.851 4.04Z"
      />
    </CrownWrap>
  );
};
export default Crown;
