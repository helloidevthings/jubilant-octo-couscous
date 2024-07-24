// import { useEffect, useRef } from 'react';
// import styled from '@emotion/styled';
// import Image from 'next/image';

// const EyeHolder = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 20rem;
//   height: 20rem;
//   z-index: -1;
// `;

// const Whites = styled.div`
//   background: radial-gradient(
//     circle at 50% 40%,
//     #fcfcfc,
//     #efeff1 66%,
//     #9b5050 100%
//   );
//   border-radius: 50%;
//   width: 100%;
//   height: 100%;
//   position: relative;
//   overflow: hidden;
// `;

// const Iris = styled(Image)`
//   width: 14rem;
//   height: 14rem;
//   border-radius: 50%;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);

//   &:before {
//     content: '';
//     display: block;
//     position: absolute;
//     width: 37.5%;
//     height: 37.5%;
//     border-radius: 50%;
//     top: 31.25%;
//     left: 31.25%;
//     background: black;
//   }
// `;

// const Eye = () => {
//   const irisRef = useRef(null);

//   useEffect(() => {
//     const iris = irisRef.current;
//     const eyeTracking = (e) => {
//       const { clientX: mouseX, clientY: mouseY } = e;
//       const x = (mouseX * 100) / window.innerWidth;
//       const y = (mouseY * 100) / window.innerHeight;
//       const distanceX = x - 50;
//       const distanceY = 50 - y;
//       const rotateY = 60 * (distanceX / 50);
//       const rotateX = 60 * (distanceY / 50);
//       const distanceFromCenter = Math.sqrt(distanceX ** 2 + distanceY ** 2);
//       const scale = 1 - distanceFromCenter / 300;
//       iris.style.transition = '0s';
//       iris.style.left = `${x}%`;
//       iris.style.top = `${y}%`;
//       iris.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
//     };

//     const mouseOutReset = () => {
//       iris.style.transition = '0.5s';
//       iris.style.left = '50%';
//       iris.style.top = '50%';
//       iris.style.transform = 'translate(-50%, -50%)';
//     };

//     document.addEventListener('mousemove', eyeTracking);
//     document.addEventListener('mouseout', mouseOutReset);

//     return () => {
//       document.removeEventListener('mousemove', eyeTracking);
//       document.removeEventListener('mouseout', mouseOutReset);
//     };
//   }, []);

//   return (
//     <EyeHolder>
//       <Whites>
//         <Iris ref={irisRef} src="/iris.png" width="150" height="150" />
//       </Whites>
//     </EyeHolder>
//   );
// };

// export default Eye;
