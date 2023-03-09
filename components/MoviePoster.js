import styled from 'styled-components';
import { useState } from 'react';

const ImgWrap = styled.button`
  position: relative;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(0.98);
    }
  }

  img {
    // no drag
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    opacity: ${(props) => (props.selected === false ? '1' : '0.5')};
    transition: all 0.2s ease-in-out;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2em;
    stroke-dasharray: 50;
    opacity: ${(props) => (props.selected === false ? '0' : '1')};
    stroke-dashoffset: ${(props) => (props.selected === false ? '50' : '0')};
    transform-origin: center;
    transition: all 0.4s ease-in-out, opacity 0.8s ease-in-out;
  }

  @keyframes draw {
    from {
      stroke-dashoffset: 2000;
    }

    to {
      stroke-dashoffset: 0;
    }
  }
`;

const MoviePoster = ({ poster, title, isSelected, selected, handleClick }) => {
  // const [selected, setSelected] = useState(false);

  // const toggleSelected = (e) => {
  //   isSelected(!selected);
  //   setSelected(!selected);
  // };

  return (
    <ImgWrap selected={selected} onClick={handleClick}>
      <img src={poster} alt={title} />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 18">
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m2.999 8.943 6.257 6.258L21.772 2.685"
        />
      </svg>
    </ImgWrap>
  );
};

export default MoviePoster;
