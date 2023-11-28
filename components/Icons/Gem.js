import styled from 'styled-components';
import * as React from 'react';
// import { useInView } from 'react-intersection-observer';

const SVGWrap = styled.svg`
  max-width: 100px;

  &.classNameInView {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
`;

const Gem = () => {
  // const { ref, inView, entry } = useInView({
  //   rootMargin: '0px 0px -100px 0px',
  //   trackVisibility: true,
  //   delay: 100,
  // });

  return (
    <SVGWrap xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
      <path
        fill="#fff"
        d="M15.852 3.756 17.777 0H6.215l1.996 3.756h7.641Zm-8.779.33L5.06.3.295 5.148l3.67 2.102 3.108-3.164Zm-2.07 4.317v8.35l3.04 3.088h8.007l3.19-3.244V8.558L15.896 5.16H8.193l-3.19 3.244Zm-1.366.042L0 6.365v12.531l3.637-2.159V8.446Zm13.371-4.352 3.265 3.32 3.667-2.018-4.999-5.08-1.933 3.778ZM3.958 17.917.284 20.095l4.536 4.617 2.093-3.79-2.955-3.005Zm4.1 3.327L5.984 25h12.02l-2-3.756H8.059Zm9.111-.33 2.015 3.786 4.767-4.848-3.67-2.102-3.112 3.164Zm3.436-4.332 3.637 2.079V6.597L20.605 8.6v7.982Z"
      />
    </SVGWrap>
  );
};

export default Gem;
