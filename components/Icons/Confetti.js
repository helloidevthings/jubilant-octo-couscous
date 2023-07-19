import styled from 'styled-components';

const Confetti = ({ startAnimation }) => {
  const SVGWrap = styled.svg`
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);

    @keyframes confetti {
      0% {
        transform: scale(0) translateY(500%) rotate(180deg);
      }
      30% {
        transform: scale(1) translate(0%, 0%) rotate(0deg);
      }
      100% {
        opacity: 0;
      }
    }
  `;

  const Confetti = styled.path`
    animation: ${startAnimation
      ? 'confetti 1.5s cubic-bezier(0.65, 0, 0.32, 1.03) forwards'
      : 'none'};
    transform-origin: center;
    transform-box: fill-box;
    transform: scale(0) rotate(0deg);
  `;

  const ConfettiCircle = styled.circle`
    transform-origin: center;
    transform-box: fill-box;
    transform: scale(0);
    animation: ${startAnimation
      ? 'confetti 1.5s cubic-bezier(0.65, 0, 0.32, 1.03) forwards'
      : 'none'};
  `;

  return (
    <SVGWrap
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 211 101"
      width="13em"
      height="13em"
    >
      <Confetti
        fill="#EDA541"
        d="m23.136 28.776 5.923 8.614 4.992-9.185-1 10.406 9.73-3.827-7.456 7.329 9.913 3.321-10.422.823 5.458 8.916-8.512-6.07-1.55 10.34-2.62-10.121-7.832 6.923 4.499-9.436-10.451.269 9.512-4.337-8.179-6.512 10.075 2.792-2.08-10.245Z"
        style={{
          animationDelay: `${Math.random() * 0.5}s`,
        }}
      />
      <ConfettiCircle
        cx={72.972}
        cy={39.513}
        r={8.675}
        stroke="#7332D3"
        strokeWidth={0.912}
        transform="rotate(-22.993 72.972 39.513)"
      />
      <Confetti
        fill="#D9D9D9"
        d="M61 2.677 67.304.002l5.35 12.608-6.304 2.675z"
        style={{
          animationDelay: `${Math.random() * 0.5}s`,
        }}
      />
      <Confetti
        stroke="#D73365"
        strokeWidth={0.912}
        d="M.916 75.657c2.806-2.575 9.358-6.78 13.119-3.01 4.701 4.715-6.738 9.408-1.701 14.459 5.037 5.05 10.768-5.366 15.805-.315 4.03 4.04-.35 10.424-3.044 13.11"
        style={{
          animationDelay: `${Math.random() * 0.5}s`,
        }}
      />
      <Confetti
        fill="#EDA541"
        d="m168.159 27.03-6.32 8.328 10.288 1.857-10.194 2.317 6.687 8.036-9.298-4.778-.043 10.454-4.052-9.637-6.752 7.98 3.091-9.986-10.303 1.773 8.787-5.663-9.032-5.264 10.372 1.31-3.536-9.839 7.104 7.67 3.615-9.809.512 10.442 9.074-5.19Z"
        style={{
          animationDelay: `${Math.random() * 0.5}s`,
        }}
      />
      <ConfettiCircle
        cx={179.033}
        cy={77.979}
        r={8.675}
        stroke="#D73365"
        strokeWidth={0.912}
        transform="rotate(48.715 179.033 77.98)"
        style={{
          animationDelay: `${Math.random() * 0.5}s`,
        }}
      />
      <Confetti
        fill="#7332D3"
        d="m206.48 32.548 4.52 5.146-10.292 9.036-4.519-5.145z"
        style={{
          animationDelay: `${Math.random() * 0.5}s`,
        }}
      />
      <Confetti
        stroke="#D9D9D9"
        strokeWidth={0.912}
        d="M118.991 2.506c3.325 1.856 9.374 6.757 6.974 11.511-3.001 5.944-11.046-3.445-14.261 2.923s8.474 8.54 5.259 14.908c-2.571 5.095-10.007 2.94-13.403 1.224"
        style={{
          animationDelay: `${Math.random() * 0.5}s`,
        }}
      />
    </SVGWrap>
  );
};

export default Confetti;
