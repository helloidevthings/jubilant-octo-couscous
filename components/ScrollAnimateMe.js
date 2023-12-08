import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const AnimateWrap = styled.div`
  .fadeUp {
    opacity: ${(props) => (props.isAlive ? 1 : 0)};
    transform: translateY(${(props) => (props.isAlive ? '0px' : '10px')});
    transition: all 1.3s ease;
    color: pink;
  }

  & > .toggleTransformY {
    animation: toggleTransformY ease 1.3s infinate alternate;

    @keyframes toggleTransformY {
      from {
        transform: translateY(10px);
      }
      to {
        transform: translateY(0px);
      }
    }
  }
`;

const ScrollAnimateMe = ({ children }) => {
  const {
    ref: myRef,
    inView: isAlive,
    entry,
  } = useInView({
    rootMargin: '0px 0px -100px 0px',
    // trackVisibility: true,
    // delay: 100,
  });

  return (
    <AnimateWrap ref={myRef} $isAlive={isAlive}>
      {[...children].map((child, i) => {
        return (
          <div
            key={i}
            className={fadeUp ? 'fadeUp' : 'toggleTransformY'}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {child}
          </div>
        );
      })}
    </AnimateWrap>
  );
};

export default ScrollAnimateMe;
