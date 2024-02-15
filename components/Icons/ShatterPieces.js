import * as React from 'react';
const ShatterPieces = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 293 298"
  >
    <g fill="#fff" clipPath="url(#a)">
      <path
        className="piece1"
        d="m186.5 297.5-24-103-17-36 38-23 65 11 44-12-21 75 13 71-53 7-45 10Z"
      />
      <path
        className="piece2"
        d="m286 131-38 11-64-12-28 13-1-11 2-35 24-60 6-29 42 3 43 56 14 64ZM176 296S55 282 53 282s-43-12-43-12l-1-62-8-52 74-7h30l29-8 8 15 16 39 18 101Z"
      />
      <path
        className="piece3"
        d="m0 145 82-5 20 6 32-5-39-64-23-66-25-2L5 48l-5 97Z"
      />
      <path className="piece4" d="m79 5 18 70 45 72 10-3-1-57 28-57V0L79 5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h292.5v297.5H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ShatterPieces;
