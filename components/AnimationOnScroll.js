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
    transform: translateY(20px) scale(0.75);
    transition: all 0.5s ease-in-out;
  }

  .bounce2 {
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

  .isAlive {
    .fadeUp {
      opacity: 1;
      transform: translateY(0px);
    }

    .zoomUp {
      opacity: 1;
      transform: translateY(0px) scale(1);
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

const AnimationOnScroll = ({ children }) => {
  const { ref, inView, entry } = useInView({
    // rootMargin: '0px 0px -100px 0px',
    threshold: 0.5,
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
