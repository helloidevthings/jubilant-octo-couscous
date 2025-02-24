import React, { useState } from 'react';
import styled from 'styled-components';

const blockNavigation = [
  {
    title: 'Merchandise',
    id: 'merchandise',
    link: '/',
    img: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/merch-card_psyvro.jpg',
      alt: 'merch',
    },
  },
  {
    title: 'Concessions',
    id: 'concessions',
    link: '/',
    img: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/merch-card_psyvro.jpg',
      alt: 'merch',
    },
  },
  {
    title: 'Extra Credits',
    id: 'extra-credits',
    link: '/',
    img: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/merch-card_psyvro.jpg',
      alt: 'merch',
    },
  },
  {
    title: 'Sweepstakes',
    id: 'sweepstakes',
    link: '/',
    img: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/merch-card_psyvro.jpg',
      alt: 'merch',
    },
  },
];

const StickyNavContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AnchorNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  position: ${(props) => (props.$sticky ? 'sticky' : 'normal')};
  top: 0;
  width: 100%;
  background: ${(props) => props.$sticky && '#3f3f3f9c'};
  backdrop-filter: blur(10px);
  z-index: 100;
`;

const AnchorLink = styled.div`
  display: block;
  flex: 0 0 auto;
  position: relative;
  padding: 0.5em 1em;
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5em;
  align-items: center;
  justify-items: center;
  ${(props) => props.$sticky && 'grid-template-columns: 1fr 2fr;'}
  transition: all 0.25s ease-in-out;

  &:hover {
    img {
      transform: scale(1.1);
      box-shadow: 0 0 20px #3f3f3f;
    }
  }
`;

const AnchorText = styled.span`
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: ${(props) => (props.$sticky ? '0em' : '0.5em')};
`;

const AnchorImage = styled(Image)`
  display: block;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 50%;
  border: 2px solid #3f3f3f;
  box-shadow: 0 0 10px #3f3f3f;
  top: 0;
  left: 0;
  ${(props) => props.$sticky && 'max-width: 50px; max-height: 50px;'}
  transition: all 0.125s ease-in-out;
`;

const StickyNav = () => {
  const [isSticky, setIsSticky] = useState(false);

  return (
    <StickyNavContainer>
      <AnchorNav $sticky={stickyState}>
        {blockNavigation.map((block) => (
          <AnchorLink
            key={block.title}
            id={block.id}
            href={block.link}
            onClick={() => setStickyState(!stickyState)}
            $sticky={stickyState}
          >
            <AnchorImage
              width={205}
              height={205}
              src={block.img.src}
              alt={block.img.alt}
              $sticky={stickyState}
            />
            <AnchorText $stick={stickyState}>{block.title}</AnchorText>
          </AnchorLink>
        ))}
      </AnchorNav>
    </StickyNavContainer>
  );
};

export default StickyNav;
