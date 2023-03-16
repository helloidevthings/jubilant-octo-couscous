import Head from 'next/head';
import styled from 'styled-components';
import ProjectShelf from '../components/ProjectShelf';
import { useState } from 'react';

const ProductDesign = [
  {
    title: 'Membership Calculator',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2023',
    alt: 'alt',
    tag: ['Development', 'Marketing', 'UX/UI'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678985956/Portfolio_Images/Screen_Shot_2023-03-16_at_12.59.02_PM_bte7b0.png',
  },
  {
    title: 'Booking Test',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2023',
    alt: 'alt',
    tag: ['App', 'Testing', 'Research'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678985748/Portfolio_Images/Screen_Shot_2023-03-16_at_12.55.38_PM_t43csq.png',
  },
  {
    title: 'Regal Theatre Pages',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2023',
    alt: 'alt',
    tag: ['Website', 'Development'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678985861/Portfolio_Images/Screen_Shot_2023-03-16_at_12.57.26_PM_q6my6b.png',
  },
  {
    title: 'Regal Movie Pages',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2022',
    alt: 'alt',
    tag: ['Website', 'Development'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678985500/Portfolio_Images/Screen_Shot_2023-03-16_at_12.51.29_PM_rpfrx2.png',
  },
  {
    title: 'UI Theme',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2022',
    alt: 'alt',
    tag: ['Website', 'Development'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678986478/Portfolio_Images/Screen_Shot_2023-03-16_at_1.07.46_PM_hqfs6g.png',
  },
  {
    title: 'Competative Analysis & Assesment',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2021',
    alt: 'alt',
    tag: ['App', 'Research'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678986805/Portfolio_Images/Screen_Shot_2023-03-16_at_1.10.43_PM_vjp7qw.png',
  },
  {
    title: 'Cadre5 Website',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2021',
    alt: 'alt',
    tag: ['Website', 'Development'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678820158/Portfolio_Images/Screen_Shot_2022-02-22_at_9.22.13_AM_zszmji.png',
  },
  {
    title: 'Seat Maps',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2020',
    alt: 'alt',
    tag: ['Website', 'UI/UX'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295122/Portfolio_Images/Screen_Shot_2020-03-23_at_11.21.55_AM_rcbflw.png',
  },
  {
    title: 'Marketing Consent',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2019',
    alt: 'alt',
    tag: ['Website', 'UI/UX'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295125/Portfolio_Images/Screen_Shot_2020-03-19_at_4.54.33_PM_vfn9qv.png',
  },
  {
    title: 'Fillauer',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2018',
    alt: 'alt',
    tag: ['Website', 'UI/UX'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295133/Portfolio_Images/Artboard_fqh6kw.png',
  },
];

const ProjectBranding = [
  {
    title: 'Barbell Playa',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2018',
    alt: 'alt',
    tag: ['branding', 'print'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295149/Portfolio_Images/Screen_Shot_2018-12-27_at_8.38.31_PM_dgf8lv.png',
  },
  {
    title: 'Bourbon & Bird',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    alt: 'alt',
    tag: ['Branding', 'Print'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295140/Portfolio_Images/bourbonbird2_bfdkhx.png',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295140/Portfolio_Images/bourbonbird2_bfdkhx.png',
  },
  {
    title: 'Level Up Buttercup',
    description:
      'Logo for a local Dungeons & Dragons Group. Tshirts, Website, Streaming Frame and Animations',
    date: '2018',
    alt: 'alt',
    tag: ['Branding', 'Web', 'Print'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295127/Portfolio_Images/buttercups3_de6mky.png',
  },
  {
    title: 'Curious Dog',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2015',
    alt: 'alt',
    tag: ['Branding', 'Print'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295117/Portfolio_Images/b11afe19780187.562e0241bc368_nwjflq.jpg',
  },
  {
    title: 'Old City Wine Bar',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2015',
    alt: 'alt',
    tag: ['Branding', 'Print'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295116/Portfolio_Images/Screenshot_2019-11-11_15.02.28_qbiwdt.png',
  },
  {
    title: 'Brochure for a College',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2012',
    alt: 'alt',
    tag: ['Brochure', 'Print'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295151/Portfolio_Images/e34f4a7857029.560b2d7a4957b_ewhusg.jpg',
  },
];

const ProjectsIllustration = [
  {
    title: 'Data Visualization',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2018',
    alt: 'alt',
    tag: ['Website', 'UI/UX'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678820159/Portfolio_Images/Screen_Shot_2022-02-22_at_9.29.30_AM_i59hei.png',
  },
  {
    title: '404 Page',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2018',
    alt: 'alt',
    tag: ['Website', 'Illustration'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1678908929/Portfolio_Images/Screen_Shot_2023-03-15_at_3.34.41_PM_kp1c2t.png',
  },
  {
    title: 'Branding Study Poster',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    alt: 'alt',
    date: '2016',
    tag: ['Illustration', 'Print'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295198/Portfolio_Images/image-asset_10_ilhexk.png',
  },
  {
    title: 'Heartmenders',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    alt: 'alt',
    date: '2017',
    tag: ['Illustration', 'Print'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295148/Portfolio_Images/image-asset_3_g4riz1.jpg',
  },
  {
    title: 'Playbook',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2017',
    alt: 'alt',
    tag: ['Illustration', 'Print'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295128/Portfolio_Images/7aaf8a29953483.5629003774ab7_wieelt.jpg',
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
