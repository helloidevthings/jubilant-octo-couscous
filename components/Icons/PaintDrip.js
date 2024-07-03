import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;

  path {
    stroke-width: 13px;
    stroke-dasharray: 1000;
    stroke-dashoffset: 10;
    animation: ${(props) =>
      props.$splosion === true ? 'draw 0.8s forwards' : 'none'};

    @keyframes draw {
      from {
        stroke-dashoffset: 1000;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
  }
`;

const PaintDrip = ({ splosion, style }) => (
  <Wrapper
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    $splosion={splosion}
    viewBox="0 0 62 242"
    style={style}
  >
    <g clipPath="url(#a)">
      <path
        fill="pink"
        d="M30 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z"
      />
      <path
        fill="pink"
        d="M19 46c10.493 0 19-8.507 19-19S29.493 8 19 8 0 16.507 0 27s8.507 19 19 19Zm30 22c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13Z"
      />
      <path
        stroke="pink"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={12}
        d="M18 38v198M47 64v130"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h62v242H0z" />
      </clipPath>
    </defs>
  </Wrapper>
);
export default PaintDrip;
