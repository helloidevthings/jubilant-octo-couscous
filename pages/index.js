'use client';
import Head from 'next/head';
import styled from 'styled-components';
import ProjectShelf from '../components/ProjectShelf';
import { useState } from 'react';

const UserTesting = [
  {
    title: 'Seats First Booking Test',
    description: 'User Test showing that seats first is the best option',
    date: '2023',
    alt: 'alt',
    tag: ['App', 'Testing', 'Research'],
    path: '/portfolio/SeatsFirst',
    src: 'usertesting2_xd5fao.png',
  },
];
const ProductDesign = [
  // {
  //   title: 'Membership Calculator',
  //   description: 'Branding for a gym in Mexico near the beach',
  //   date: '2023',
  //   alt: 'alt',
  //   tag: ['Development', 'Marketing', 'UX/UI'],
  //   path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
  //   src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678985956/Portfolio_Images/Screen_Shot_2023-03-16_at_12.59.02_PM_bte7b0.png',
  // },
  // {
  //   title: 'Regal Theatre Pages',
  //   description: 'Adding meaningful information to the Theatre Pages',
  //   date: '2023',
  //   alt: 'alt',
  //   tag: ['Website', 'Development'],
  //   path: '/portfolio/RegalTheatrePages',
  //   src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678985861/Portfolio_Images/Screen_Shot_2023-03-16_at_12.57.26_PM_q6my6b.png',
  // },
  // {
  //   title: 'Regal Movie Pages',
  //   description: 'Removing the scroll time from the movie pages',
  //   date: '2022',
  //   alt: 'alt',
  //   tag: ['Website', 'Development'],
  //   path: '/portfolio/RegalMoviePages',
  //   src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678985500/Portfolio_Images/Screen_Shot_2023-03-16_at_12.51.29_PM_rpfrx2.png',
  // },
  // {
  //   title: 'UI Theme',
  //   description: 'Branding for a gym in Mexico near the beach',
  //   date: '2022',
  //   alt: 'alt',
  //   tag: ['Website', 'Development'],
  //   path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
  //   src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678986478/Portfolio_Images/Screen_Shot_2023-03-16_at_1.07.46_PM_hqfs6g.png',
  // },
  // {
  //   title: 'Competative Analysis & Assesment',
  //   description: 'Comparing the Regal App to the Competators',
  //   date: '2021',
  //   alt: 'alt',
  //   tag: ['App', 'Research'],
  //   path: 'portfolio/CompetativeAnalysis',
  //   src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678986805/Portfolio_Images/Screen_Shot_2023-03-16_at_1.10.43_PM_vjp7qw.png',
  // },
  {
    title: 'Cadre5 Website',
    description: 'Website for a B2B company in the tech industry',
    date: '2021',
    alt: 'alt',
    tag: ['Website', 'Development'],
    path: '/portfolio/Cadre5',
    src: 'cadre5home_kwsufj.png',
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
  {
    title: 'Marketing Consent',
    description: 'Checkbox for Marketing Consents on the Cineworld Website',
    date: '2019',
    alt: 'alt',
    tag: ['Website', 'UI/UX'],
    path: '/portfolio/MarketingConsent',
    src: 'booking2_zhipb9.png',
  },
  {
    title: 'Fillauer',
    description: 'Website Design for a Prosthetic Company',
    date: '2018',
    alt: 'alt',
    tag: ['Website', 'UI/UX'],
    path: '/portfolio/Fillauer',
    src: 'fillauerlogo_hmmm7c',
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
    src: 'barbellplaya4_qszh6q',
  },
  {
    title: 'Bourbon & Bird',
    description:
      'Branded Experience for a play, with installation, print and digital media',
    alt: 'alt',
    tag: ['Branding', 'Print'],
    path: '/portfolio/BourbonBird',
    src: 'everybrilliantthinggroup_v47zb3',
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
    src: 'buttercuplogo_viqyda',
  },
  {
    title: 'Curious Dog',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2015',
    alt: 'alt',
    tag: ['Branding', 'Print'],
    path: '/portfolio/CuriousDog',
    src: 'curiousdoglogo_zjy5yh',
  },
  {
    title: 'Old City Wine Bar',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2015',
    alt: 'alt',
    tag: ['Branding', 'Print'],
    path: '/portfolio/OldCityWineBar',
    src: 'oldcitywinebar_dxg6zi',
  },
  {
    title: 'Brochure for a College',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2012',
    alt: 'alt',
    tag: ['Brochure', 'Print'],
    path: '/portfolio/Brochure',
    src: 'brochurch6_qu4cwb',
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
    src: 'cadre5illustrators_jydm1q',
  },
  {
    title: 'Cadre5 404 Page',
    description: 'Custom Illustration for a 404 Page',
    date: '2018',
    alt: 'alt',
    tag: ['Website', 'Illustration'],
    path: '/portfolio/Cadre5404',
    src: 'cadre5404_i1v8b9',
  },
  {
    title: 'Branding Study Poster',
    description:
      'Custom illustration (using food) for a poster about brand perceptions',
    alt: 'alt',
    date: '2016',
    tag: ['Illustration', 'Print'],
    path: '/portfolio/FoodPoster',
    src: 'foodgirl3_mw5gnm',
  },
  {
    title: 'Heartmenders',
    description: "Illustration for a children's book",
    alt: 'alt',
    date: '2017',
    tag: ['Illustration', 'Print'],
    path: '/portfolio/Heartmenders',
    src: 'heartmenders2_cplcxd',
  },
  {
    title: 'Playbook',
    description:
      'Custom illustration of the Author to help explain the book to the reader',
    date: '2017',
    alt: 'alt',
    tag: ['Illustration', 'Print'],
    path: '/portfolio/Playbook',
    src: 'elainedrawing3_fci2rk',
  },
];

const Wrapper = styled.div`
  background: var(--primaryBG);
  color: var(--primaryText);
  transition: all 0.3s ease-in-out;

  /* Color Variables */
  /* background: ${(props) => {
    switch (props.currentColor) {
      case 'light':
        return;
      case 'dark':
        return props.theme.colors.secondaryGradient90;
      default:
        return props.theme.colors.primaryGradient90;
    }
  }}; */

  --primary: var(${(props) => `--${props.currentColor}`});
  --primaryText: var(${(props) => `--${props.currentColor}Text`});
  --primaryBG: var(${(props) => `--${props.currentColor}Bg`});
  --secondary: var(${(props) => `--${props.currentColor}Secondary`});
  --primaryGradient90: var(${(props) => `--${props.currentColor}Gradient90`});
  --primaryGradient180: var(${(props) => `--${props.currentColor}Gradient30`});
  --primaryBoxShadow: var(${(props) => `--${props.currentColor}BoxShadow`});

  --light: #ffffff;
  --dark: #000000;
  --pink: 'pink';

  --lightBg: #dedede;
  --darkBg: #1f1f29;
  --pinkBg: #ffffff;

  --lightText: #000000;
  --darkText: #ffffff;
  --pinkText: #ab01a2;

  --lightSecondary: #7d7d8b;
  --darkSecondary: #69697c;
  --pinkSecondary: #ffc7fe;

  --lightBoxShadow: 2px 4px 7px 0px #c8c8d7;
  --darkBoxShadow: 2px 4px 7px 0px #0a0a0b;
  --pinkBoxShadow: 2px 4px 7px 0px #d372cd;

  --darkGradient90: linear-gradient(90deg, #14141c, #b8b7d259);
  --lightGradient90: linear-gradient(90deg, #c5c5d2b3, #ffffffbf);
  --pinkGradient90: linear-gradient(90deg, #fff0fea8, #ffffffbf);
  --darkGradient30: linear-gradient(30deg, #14141c, #b8b7d259);
  --lightGradient30: linear-gradient(30deg, #f4f4fcb3, #ffffffbf);
  --pinkGradient30: linear-gradient(30deg, #fff0fea8, #ffffffbf);
`;

const ColorButton = styled.button`
  border: none;
  margin: 0.3rem;
  padding: 0.5rem 1rem;
  background: ${(props) => {
    switch (props.currentColor) {
      case 'light':
        return '#fff';
      case 'dark':
        return '#000';
      case 'pink':
        return '#d97cd3';
      default:
        return '#000';
    }
  }};
  color: ${(props) => {
    switch (props.currentColor) {
      case 'light':
        return '#000';
      case 'dark':
        return '#fff';
      case 'pink':
        return '#fff';
      default:
        return '#000';
    }
  }};
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const PortfolioSection = styled.section`
  padding: 1rem 0.5rem;
  background: var(--primaryGradient180);

  @media (min-width: 768px) {
    padding: 2rem 3rem;
  }

  h2 {
    font-size: 3rem;
  }
`;

export default function Home() {
  const [currentColor, updateColor] = useState('light');

  return (
    <Wrapper currentColor={currentColor}>
      <Head>
        <title>Joyanna's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ColorButton
          currentColor={currentColor}
          onClick={() => updateColor('light')}
        >
          Light
        </ColorButton>
        <ColorButton
          currentColor={currentColor}
          onClick={() => updateColor('dark')}
        >
          Dark
        </ColorButton>
        <ColorButton
          currentColor={currentColor}
          onClick={() => updateColor('pink')}
        >
          Pink
        </ColorButton>
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
  );
}
