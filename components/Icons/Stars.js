import styled from 'styled-components';
import { useState } from 'react';

const StarWrap = styled.svg`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Star = styled.path`
  transform-box: fill-box;
  transform-origin: center;
  transform: scale(0) rotate(0deg) translate(0px 0px);
  opacity: 0;
  animation: ${(props) =>
    props.play ? 'starSpin 1s ease-in-out forwards' : 'none'};

  @keyframes starSpin {
    0% {
      opacity: 1;
      transform: scale(0);
    }
    50% {
      transform: scale(1) rotate(180deg);
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
`;

const Stars = ({ startAnimation }) => {
  const [play, playStars] = useState(false);

  return (
    <StarWrap
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 41"
    >
      <Star
        play={startAnimation ? startAnimation : play}
        style={{ animationDelay: '.3s' }}
        d="M4.87461 10.6758L7.67364 14.7467L10.0329 10.4061L9.56034 15.3238L14.1577 13.5152L10.6347 16.9786L15.319 18.5483L10.394 18.9369L12.9735 23.1503L8.95091 20.2823L8.21853 25.168L6.98062 20.3853L3.27909 23.6572L5.40508 19.1977L0.466386 19.3249L4.96149 17.2753L1.0965 14.1981L5.85742 15.5174L4.87461 10.6758Z"
        fill="#EDA541"
      />
      <Star
        play={startAnimation ? startAnimation : play}
        d="M36.5328 3.14413L32.7724 8.09888L38.8936 9.2039L32.8281 10.5823L36.8069 15.3634L31.2745 12.5206L31.2492 18.7407L28.8384 13.0067L24.8209 17.7553L26.6598 11.8132L20.5299 12.8684L25.7581 9.4986L20.384 6.36665L26.5551 7.14586L24.4515 1.29225L28.678 5.85588L30.8292 0.0195785L31.1334 6.23226L36.5328 3.14413Z"
        fill="#EDA541"
      />
      <Star
        play={startAnimation ? startAnimation : play}
        style={{ animationDelay: '.1s' }}
        d="M27.1612 30.5337L24.7171 33.754L28.6956 34.4723L24.7533 35.3682L27.3394 38.4757L23.7435 36.628L23.7271 40.6708L22.1602 36.9439L19.5489 40.0303L20.7442 36.1682L16.7599 36.854L20.1581 34.6638L16.6651 32.6282L20.6761 33.1346L19.3088 29.33L22.0559 32.2962L23.4541 28.5028L23.6518 32.5408L27.1612 30.5337Z"
        fill="#EDA541"
      />
      <Star
        play={startAnimation ? startAnimation : play}
        style={{ animationDelay: '.2s' }}
        d="M46.3835 25.0235L44.0687 28.0735L47.8368 28.7538L44.103 29.6023L46.5523 32.5454L43.1466 30.7954L43.131 34.6244L41.647 31.0947L39.1739 34.0178L40.3059 30.36L36.5325 31.0095L39.7508 28.9352L36.4427 27.0072L40.2415 27.4869L38.9465 23.8835L41.5483 26.6928L42.8725 23.1001L43.0598 26.9245L46.3835 25.0235Z"
        fill="#EDA541"
      />
    </StarWrap>
  );
};
export default Stars;
