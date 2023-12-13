import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const AnimateWrap = styled.div`
  display: block;

  .fadeUp {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease-in-out;
  }

  .zoomUp {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
    transition:
      transform 0.4s ease-in-out,
      opacity 0.5s ease-in-out;
  }

  .colorFade {
    filter: saturate(0) contrast(1);
    transition: filter 0.8s ease-in-out;
  }

  .parallaxY {
  }

  .bounce3 {
    transform: scale(0.5);
    transition: transform 0.5s ease-in-out;
    animation: bounce-3 ease 4s infinite;

    @keyframes bounce-3 {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(30px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  .typeIt {
    width: 18ch;
    animation:
      2s steps(15) 0s 1 normal none running typing,
      0.5s step-end 0s infinite alternate none running effect;
    white-space: nowrap;
    overflow: hidden;
    line-height: 1.5;
    border-right: 3px solid var(--tertiary);
  }

  .isAlive {
    .fadeUp {
      opacity: 1;
      transform: translateY(0px);
    }

    .zoomUp {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }

    .colorFade {
      filter: none;
    }

    .scaleAfter {
      &:after {
        transform: scaleX(1);
      }
    }

    .bounce2 {
      animation: bounce-2 ease 4s infinite alternate;

      @keyframes bounce-2 {
        0% {
          transform: translateY(30px);
        }
        50% {
          transform: translateY(0px);
        }
        100% {
          transform: translateY(0px);
        }
      }
    }

    .bounce3 {
      transform: scale(1);
    }
  }
`;

const AnimationOnScroll = ({ children, threshold }) => {
  const { ref, inView, entry } = useInView({
    // rootMargin: '0px 0px -100px 0px',
    threshold: threshold || 0.5,
    // trackVisibility: true,
    // delay: 100,
  });

  return (
    <AnimateWrap ref={ref}>
      <div className={inView ? 'isAlive' : 'dead'}>{children}</div>
    </AnimateWrap>
  );
};

export default AnimationOnScroll;
