import styled from 'styled-components';
import Card from '../../components/Card';

const blockData = [
  {
    title: 'Brave New Concessions',
    id: 'brave-new-concessions',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/merch-card_psyvro.jpg',
      alt: 'merch',
    },
  },
  {
    title: 'collectible combo',
    id: 'collectible-combo',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image: [
      {
        src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/food-card_vxdf4o.jpg',
        alt: 'food',
      },
    ],
    links: [
      {
        href: '/projects/cards',
        text: 'Learn More',
        target: '_blank',
        id: 'collectible-combo5',
      },
      {
        href: '/projects/cards',
        text: 'Sign Up',
        target: '_blank',
        id: 'collectible-combo4',
      },
    ],
  },
  {
    title: 'Earn 1000 Extra Credits',
    id: 'earn-1000-extra-credits3',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/points-card_domxos.jpg',
      alt: 'points',
    },
    links: [
      {
        href: '/projects/cards',
        text: 'Learn More',
        target: '_blank',
        id: 'earn-1000-extra-credits2',
      },
      {
        href: '/projects/cards',
        text: 'Sign Up',
        target: '_blank',
        id: 'earn-1000-extra-credits1',
      },
    ],
  },
  {
    title: 'exclusive merchandise',
    id: 'exclusive-merchandise',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739201125/merch-card_psyvro.jpg',
      alt: 'points',
    },
    links: [
      {
        href: '/projects/cards',
        text: 'Learn More',
        target: '_blank',
        id: 'exclusive-merchandise3',
      },
      {
        href: '/projects/cards',
        text: 'Sign Up',
        target: '_blank',
        id: 'exclusive-merchandis6e',
      },
    ],
  },
  {
    title: 'Marvel Rivals Digital Bundle',
    id: 'marvel-rivals-digital-bundle',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739979336/rivals_dlcgod.png',
      alt: 'points',
    },
    links: [
      {
        href: '/projects/cards',
        text: 'Learn More',
        target: '_blank',
        id: 'marvel-rivals-digital-bundl4e',
      },
      {
        href: '/projects/cards',
        text: 'Sign Up',
        target: '_blank',
        id: 'marvel-rivals-digital-bundl6e',
      },
    ],
  },
  {
    title: 'Captain America Collectible Pin',
    id: 'captain-america-collectible-pin',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739979337/capnmurcia_icjeqs.png',
      alt: 'points',
    },
    links: [
      {
        href: '/projects/cards',
        text: 'Learn More',
        target: '_blank',
        id: 'captain-america-collectible-pin3',
      },
      {
        href: '/projects/cards',
        text: 'Sign Up',
        target: '_blank',
        id: 'captain-america-collectible-pin4',
      },
    ],
  },
  {
    title: 'Brand New Flavors',
    id: 'brand-new-flavors',
    description:
      'Take home your favorite character from Captain America: Brave New World as Funko POPs! Add the newest Captain America or the iconic Red Hulk to your collection today, available in theatres.',
    image: {
      src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1739979336/flavors_biizno.png',
      alt: 'points',
    },
    links: [
      { href: '/projects/cards', text: 'Learn More', target: '_blank' },
      { href: '/projects/cards', text: 'Sign Up', target: '_blank' },
    ],
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

const Cards = () => {
  return (
    <CardsWrap>
      <h2>Card Grid</h2>
      <Card />
      <BlockGrid>
        {blockData.map(({ title, id, description, image, links }, i) => {
          return (
            <Card
              key={title + i}
              title={title}
              id={id}
              desc={description}
              image={image}
              links={links}
            />
          );
        })}
      </BlockGrid>
    </CardsWrap>
  );
};

export default Cards;
