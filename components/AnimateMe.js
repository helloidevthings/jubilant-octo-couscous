import { InView } from 'react-intersection-observer';

const Component = () => (
  <InView as="div" onChange={(inView, entry) => console.log('Inview:', inView)}>
    <h2>Plain children are always rendered. Use onChange to monitor state.</h2>
  </InView>
);

export default Component;
