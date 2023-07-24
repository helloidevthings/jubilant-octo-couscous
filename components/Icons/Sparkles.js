import { useState } from 'react';
import styled from 'styled-components';

const SvgComponent = ({ startAnimation }) => {
  const [play, playSparkle] = useState(false);

  const SVG = styled.svg`
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const Sparkle = styled.path`
    transform-box: fill-box;
    transform-origin: center;
    opacity: 0;
    animation: ${(props) => (props.play ? 'sparkle .8s ease-in-out' : 'none')};

    @keyframes sparkle {
      0% {
        opacity: 1;
        transform: scale(0);
      }
      30% {
        transform: scale(1);
      }
      100% {
        opacity: 0;
      }
    }
  `;

  return (
    <SVG
      width="41"
      height="24"
      viewBox="0 0 41 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Sparkle
        play={startAnimation ? startAnimation : play}
        style={{ animationDelay: '.1s' }}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8205 11.3407L10.5805
      8.61292L9.34062 11.3407L6.61279 12.5807L9.34062 13.8206L10.5805
      16.5484L11.8205 13.8206L14.5483 12.5807L11.8205 11.3407Z"
        fill="white"
      />
      <Sparkle
        play={startAnimation ? startAnimation : play}
        style={{ animationDelay: '0.2s' }}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M39.1815 20.3669L38.3549 18.5484L37.5283 20.3669L35.7097 21.1936L37.5283 22.0202L38.3549 23.8387L39.1815 22.0202L41 21.1936L39.1815 20.3669Z"
        fill="white"
      />
      <Sparkle
        play={startAnimation ? startAnimation : play}
        style={{ animationDelay: '0.3s' }}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.4718 1.81855L11.6452 0L10.8185 1.81855L9 2.64516L10.8185 3.47177L11.6452 5.29032L12.4718 3.47177L14.2903 2.64516L12.4718 1.81855Z"
        fill="white"
      />
      <Sparkle
        play={startAnimation ? startAnimation : play}
        style={{ animationDelay: '.4s' }}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.6654 5.81855L19.8388 4L19.0122 5.81855L17.1936 6.64516L19.0122 7.47177L19.8388 9.29032L20.6654 7.47177L22.4839 6.64516L20.6654 5.81855Z"
        fill="white"
      />
      <Sparkle
        play={startAnimation ? startAnimation : play}
        style={{ animationDelay: '.2s' }}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.60383 17.2671L1.98387 15.9032L1.36391 17.2671L0 17.8871L1.36391 18.507L1.98387 19.8709L2.60383 18.507L3.96774 17.8871L2.60383 17.2671Z"
        fill="white"
      />
      <Sparkle
        play={startAnimation ? startAnimation : play}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.5937 7.40625L35.5 5L34.4062 7.40625L32 8.5L34.4062 9.59375L35.5 12L36.5937 9.59375L39 8.5L36.5937 7.40625Z"
        fill="white"
      />
      <Sparkle
        play={startAnimation ? startAnimation : play}
        style={{ animationDelay: '.3s' }}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.0756 15.1825L28.629 12L27.1825 15.1825L24 16.629L27.1825 18.0756L28.629 21.2581L30.0756 18.0756L33.2581 16.629L30.0756 15.1825Z"
        fill="white"
      />
    </SVG>
  );
};
export default SvgComponent;
