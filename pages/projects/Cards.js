import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

const blockData = [
  {
    title: 'Brave New Concessions',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image:
      'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/merch-card_psyvro.jpg',
    alt: 'merch',
  },
  {
    title: 'collectible combo',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image:
      'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/food-card_vxdf4o.jpg',
    alt: 'food',
    links: [
      { href: '/projects/cards', text: 'Learn More', target: '_blank' },
      { href: '/projects/cards', text: 'Sign Up', target: '_blank' },
    ],
  },
  {
    title: 'Earn 1000 Extra Credits',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image:
      'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/points-card_domxos.jpg',
    alt: 'points',
    links: [
      { href: '/projects/cards', text: 'Learn More', target: '_blank' },
      { href: '/projects/cards', text: 'Sign Up', target: '_blank' },
    ],
  },
  {
    title: 'exclusive merchandise',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image:
      'https://res.cloudinary.com/labofthingsimages/image/upload/v1739979336/hulk_riqel5.png',
    alt: 'points',
    links: [
      { href: '/projects/cards', text: 'Learn More', target: '_blank' },
      { href: '/projects/cards', text: 'Sign Up', target: '_blank' },
    ],
  },
  {
    title: 'Marvel Rivals Digital Bundle',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image:
      'https://res.cloudinary.com/labofthingsimages/image/upload/v1739979336/rivals_dlcgod.png',
    alt: 'points',
    links: [
      { href: '/projects/cards', text: 'Learn More', target: '_blank' },
      { href: '/projects/cards', text: 'Sign Up', target: '_blank' },
    ],
  },
  {
    title: 'Captain America Collectible Pin',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image:
      'https://res.cloudinary.com/labofthingsimages/image/upload/v1739979337/capnmurcia_icjeqs.png',
    alt: 'points',
    links: [
      { href: '/projects/cards', text: 'Learn More', target: '_blank' },
      { href: '/projects/cards', text: 'Sign Up', target: '_blank' },
    ],
  },
  {
    title: 'Brand New Flavors',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image:
      'https://res.cloudinary.com/labofthingsimages/image/upload/v1739979336/flavors_biizno.png',
    alt: 'points',
    links: [
      { href: '/projects/cards', text: 'Learn More', target: '_blank' },
      { href: '/projects/cards', text: 'Sign Up', target: '_blank' },
    ],
  },
];

const blockNavigation = [
  {
    title: 'Merchandise',
    link: '/',
    img: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/merch-card_psyvro.jpg',
      alt: 'merch',
    },
  },
  {
    title: 'Concessions',
    link: '/',
    img: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/merch-card_psyvro.jpg',
      alt: 'merch',
    },
  },
  {
    title: 'Extra Credits',
    link: '/',
    img: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/merch-card_psyvro.jpg',
      alt: 'merch',
    },
  },
  {
    title: 'Sweepstakes',
    link: '/',
    img: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/merch-card_psyvro.jpg',
      alt: 'merch',
    },
  },
];

const CardsWrap = styled.section`
  text-align: center;
  font-family: 'Azo Sans';

  h2 {
    margin: 2em 0 1.5em;
    font-size: 3rem;
  }
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

const BlockGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 375px));
  gap: 1rem;
  padding: 2rem;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  width: 375px;
  min-height: 275px;
  height: auto;
  padding: 0;
  background: linear-gradient(180deg, #d9d9d970 0%, #d9d9d920 100%);
  font-family: 'Azo Sans';
  transform: scale(1);
  transition: all 0.5s ease-in-out;

  ${(props) =>
    props.$expanded &&
    `
    box-shadow: 0 0 20px #8787874d;
    height: auto;
    transform: scale(1.02);

    p {
      opacity: 1;
      transform: scale(1);
      height: auto;
      transition: opacity 0.5s ease-in-out;
    }

    figure {
      border-radius: 100%;
      width: 150px;
      height: 150px;
      margin-top: 1em;
      transition: 0.25s ease-in-out;
    }
  `}
`;

const BlockImageWrap = styled.figure`
  position: relative;
  width: 375px;
  height: 210px;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

const BlockImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BlockTitle = styled.h3`
  font-size: 1.25rem;
  text-transform: capitalize;
  padding: 0.75em 0.5em 0.5em;
  text-align: center;
`;

const VisuallyHidden = styled.div`
  opacity: 0;
  height: 0;
  overflow: hidden;

  ${(props) => props.$expanded && `opacity: 1; height: auto;`}
`;

const BlockDescription = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5em 1.25em 0.5em 1.8em;
  opacity: 0;
  transform-origin: top center;
  transform: scale(0);
  height: 0;
`;

const BlockLinks = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1.25em;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-self: flex-end;
  border-top: 2px solid #d9d9d970;
`;

const BlockLink = styled.a`
  display: block;
  position: relative;
  padding: 0.5em 1em;
  flex: 1 1 40%;
  text-decoration: none;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: scaleY(0);
    transform-origin: bottom center;
    transition: transform 0.25s ease-in-out;
  }

  &:hover {
    &:after {
      background: linear-gradient(180deg, #d9d9d970 0%, #d9d9d920 100%);
      transform: scaleY(1);
    }
  }

  &:nth-child(2) {
    border-left: 2px solid #d9d9d970;
  }
`;

const Cards = () => {
  const [stickyState, setStickyState] = useState(false);
  return (
    <CardsWrap>
      <AnchorNav $sticky={stickyState}>
        {blockNavigation.map((block) => (
          <AnchorLink
            key={block.title}
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
      <h2>Card Grid</h2>
      <BlockGrid>
        {blockData.map((block) => {
          const [expanded, setExpand] = useState(false);
          return (
            <Block
              key={block.title}
              $expanded={expanded}
              onClick={() => setExpand(!expanded)}
            >
              <BlockImageWrap>
                <BlockImage
                  fill
                  src={block.image}
                  alt={block.alt}
                  id={block.title}
                />
              </BlockImageWrap>
              <BlockTitle>{block.title}</BlockTitle>
              <VisuallyHidden $expanded={expanded}>
                <BlockDescription>{block.description}</BlockDescription>
                {block.links && (
                  <BlockLinks>
                    {block.links &&
                      block.links.map((link) => (
                        <BlockLink
                          key={link.href}
                          href={link.href}
                          target={link.target}
                        >
                          {link.text}
                        </BlockLink>
                      ))}
                  </BlockLinks>
                )}
              </VisuallyHidden>
            </Block>
          );
        })}
      </BlockGrid>
    </CardsWrap>
  );
};

export default Cards;
