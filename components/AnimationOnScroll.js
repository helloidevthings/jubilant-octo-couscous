import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const AnimateWrap = styled.div`
  display: block;
  /* opacity: ${(props) => (props.isinview === 'true' ? '1' : '0')}; */
  /* transition: opacity 0.5s ease-in-out; */
  /* color: pink; */
`;

const AnimationOnScroll = ({ children }) => {
  const { ref, inView, entry } = useInView({
    rootMargin: '0px 0px -100px 0px',
    trackVisibility: true,
    delay: 100,
  });

  return (
    <AnimateWrap ref={ref} className={inView ? 'inView' : null}>
      {children}
    </AnimateWrap>
  );
};

export default AnimationOnScroll;
