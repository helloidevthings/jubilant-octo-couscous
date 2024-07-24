import Head from 'next/head';
import styled from 'styled-components';
// import Providers from '../public/Providers';
import ProjectShelf from '../components/ProjectShelf';

import ThemeButton from '../components/ThemeButton';
// import { SiteTakeOver } from './SiteTakeOver';
// import { UserTesting } from './UserTesting';
// import { ProductDesign } from './ProductDesign';
// import { ProjectBranding } from './ProjectBranding';
// import { ProjectsIllustration } from './ProjectsIllustration';

const Wrapper = styled.main`
  transition: all 0.3s ease-in-out;
  background: var(--primaryBG);
  color: var(--primaryText);
`;

const Intro = styled.header`
  padding: 1rem 0.5rem 2rem;
  text-align: center;
`;

const ButtonGroup = styled.div`
  text-align: right;
  padding: 1rem;
`;

const PortfolioSection = styled.section`
  padding: 1rem 0.5rem;
  background: var(--gradient90);

  @media (min-width: 768px) {
    padding: 2rem 3rem;
  }

  h2 {
    font-size: 3rem;
  }
`;

const SiteTakeOver = [
  {
    title: 'Inside Out 2',
    description: 'Animation to promote ticket sales for Inside Out 2',
    date: '2024',
    alt: 'alt',
    tag: ['Development', 'Design'],
    path: '/portfolio/IO2',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1721744230/2024-05-10_12.25.19_fzrztu.gif',
  },
  {
    title: 'Ghostbusters',
    description: 'Animation to promote ticket sales for Ghostbusters',
    date: '2024',
    alt: 'alt',
    tag: ['Development', 'Design'],
    path: '/portfolio/Ghostbusters',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1721839568/2024-03-04_16.26.07_b4xmca.gif',
  },
  {
    title: 'Borderlands',
    description: 'Animation to promote ticket sales for Borderlands',
    date: '2024',
    alt: 'alt',
    tag: ['Development', 'Design'],
    path: '/portfolio/Borderlands',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1721841208/2024-07-24_13.12.53_ny3ki0.gif',
  },
];

const UserTesting = [
  {
    title: 'Seats First Booking Test',
    description: 'User Test showing that seats first is the best option',
    date: '2023',
    alt: 'alt',
    tag: ['App', 'Testing', 'Research'],
    path: '/portfolio/SeatsFirst',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/usertesting2_xd5fao',
  },
  {
    title: 'Unlimited Sign Up',
    description: 'User Test showing saves 48% of the time it takes to sign up',
    date: '2024',
    alt: 'alt',
    tag: ['App', 'Testing', 'Research'],
    path: '/portfolio/SeatsFirst',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/usertesting2_xd5fao',
  },
  // {
  //   title: 'Seats First Booking Test',
  //   description: 'User Test showing that seats first is the best option',
  //   date: '2023',
  //   alt: 'alt',
  //   tag: ['App', 'Testing', 'Research'],
  //   path: '/portfolio/SeatsFirst',
  //   src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/usertesting2_xd5fao',
  // },
];

const ProductDesign = [
  {
    title: 'Cadre5 Website',
    description: 'Website for a B2B company in the tech industry',
    date: '2021',
    alt: 'alt',
    tag: ['Website', 'Development'],
    path: '/portfolio/Cadre5',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/cadre5home_kwsufj.png',
  },
  // {
  //   title: 'Seat Maps',
  //   description: 'Branding for a gym in Mexico near the beach',
  //   date: '2020',
  //   alt: 'alt',
  //   tag: ['Website', 'UI/UX'],
  //   path: '/portfolio/SeatMaps',
  //   src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295122/Portfolio_Images/Screen_Shot_2020-03-23_at_11.21.55_AM_rcbflw.png',
  // },
  // {
  //   title: 'Marketing Consent',
  //   description: 'Checkbox for Marketing Consents on the Cineworld Website',
  //   date: '2019',
  //   alt: 'alt',
  //   tag: ['Website', 'UI/UX'],
  //   path: '/portfolio/MarketingConsent',
  //   src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/booking2_zhipb9.png',
  // },
  {
    title: 'Fillauer',
    description: 'Website Design for a Prosthetic Company',
    date: '2018',
    alt: 'alt',
    tag: ['Website', 'UI/UX'],
    path: '/portfolio/Fillauer',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/fillauerlogo_hmmm7c',
  },
];

const ProjectsIllustration = [
  {
    title: 'Data Visualization',
    description: 'Data Visualization for a B2B company in the tech industry',
    date: '2018',
    alt: 'alt',
    tag: ['Website', 'UI/UX'],
    path: '/portfolio/DataVisualization',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/cadre5illustrators_jydm1q',
  },
  {
    title: 'Cadre5 404 Page',
    description: 'Custom Illustration for a 404 Page',
    date: '2018',
    alt: 'alt',
    tag: ['Website', 'Illustration'],
    path: '/portfolio/Cadre5404',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/cadre5404_i1v8b9',
  },
  {
    title: 'Branding Study Poster',
    description:
      'Custom illustration (using food) for a poster about brand perceptions',
    alt: 'alt',
    date: '2016',
    tag: ['Illustration', 'Print'],
    path: '/portfolio/FoodPoster',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/foodgirl3_mw5gnm',
  },
  {
    title: 'Heartmenders',
    description: "Illustration for a children's book",
    alt: 'alt',
    date: '2017',
    tag: ['Illustration', 'Print'],
    path: '/portfolio/Heartmenders',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/heartmenders2_cplcxd',
  },
  {
    title: 'Playbook',
    description:
      'Custom illustration of the Author to help explain the book to the reader',
    date: '2017',
    alt: 'alt',
    tag: ['Illustration', 'Print'],
    path: '/portfolio/Playbook',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/elainedrawing3_fci2rk',
  },
];

const ProjectBranding = [
  {
    title: 'Barbell Playa',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2018',
    alt: 'alt',
    tag: ['branding', 'print'],
    path: '/portfolio/Barbell',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/barbellplaya4_qszh6q',
  },
  {
    title: 'Every Brilliant Thing',
    description:
      'Branded Experience for a play, with installation, print and digital media',
    alt: 'alt',
    tag: ['Branding', 'Print'],
    path: '/portfolio/EveryBrilliantThing',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/everybrilliantthinggroup_v47zb3',
  },
  {
    title: 'Bourbon & Bird',
    description:
      'Brand for a restaurant speacializing in bourbon and chicken wings.',
    alt: 'alt',
    tag: ['Branding', 'Print'],
    path: '/portfolio/BourbonBird',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263603/Portfolio_Images/bourbonbird2_na8l4c.png',
  },
  {
    title: 'Level Up Buttercup',
    description:
      'Logo for a local Dungeons & Dragons Group. Tshirts, Website, Streaming Frame and Animations',
    date: '2018',
    alt: 'alt',
    tag: ['Branding', 'Web', 'Print'],
    path: '/portfolio/LevelUpButtercup',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/buttercuplogo_viqyda',
  },
  {
    title: 'Curious Dog',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2015',
    alt: 'alt',
    tag: ['Branding', 'Print'],
    path: '/portfolio/CuriousDog',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/curiousdoglogo_zjy5yh',
  },
  {
    title: 'Old City Wine Bar',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2015',
    alt: 'alt',
    tag: ['Branding', 'Print'],
    path: '/portfolio/OldCityWineBar',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/oldcitywinebar_dxg6zi',
  },
  {
    title: 'Brochure for a College',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2012',
    alt: 'alt',
    tag: ['Brochure', 'Print'],
    path: '/portfolio/Brochure',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/brochurch6_qu4cwb',
  },
];

export default function Home() {
  return (
    // <Providers>
    <Wrapper>
      <Head>
        <title>Joyanna's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ButtonGroup>
          <ThemeButton />
        </ButtonGroup>
        <Intro>
          <h1>Joyanna's Portfolio</h1>
          <h2>Everything is in progress...</h2>
          <p>
            Taking this opportunity to play around with Next.js.
            <br />
            Every page is a draft that I'm currently working on. ☠️
          </p>
        </Intro>
        <PortfolioSection>
          <h2>Site Take Over</h2>
          <ProjectShelf imgs={SiteTakeOver} />
        </PortfolioSection>
        <PortfolioSection>
          <h2>User Testing</h2>
          <ProjectShelf imgs={UserTesting} />
        </PortfolioSection>
        <PortfolioSection>
          <h2>Product Design</h2>
          <ProjectShelf imgs={ProductDesign} />
        </PortfolioSection>
        <PortfolioSection>
          <h2>Branding</h2>
          <ProjectShelf imgs={ProjectBranding} />
        </PortfolioSection>
        <PortfolioSection>
          <h2>Illustration</h2>
          <ProjectShelf imgs={ProjectsIllustration} />
        </PortfolioSection>
      </main>
    </Wrapper>
    // </Providers>
  );
}
