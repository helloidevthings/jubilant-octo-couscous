import Head from 'next/head';
import styled from 'styled-components';
import ButtonSlider from '../components/ButtonSlider';
import ProjectShelf from '../components/ProjectShelf';

const Wrapper = styled.div`
  padding: 3rem;
`;

const ProductDesign = [
  {
    title: 'Digital Tickets',
    description: 'Branding for a gym in Mexico near the beach',
    date: '2020',
    alt: 'alt',
    tag: ['Website', 'UI/UX'],
    path: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1668615393/20210409_194223_wmcoo3.jpg',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295137/Portfolio_Images/Screen_Shot_2020-04-16_at_10.25.04_AM_xoyuso.png',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2018',
    alt: 'alt',
    tag: ['Branding', 'Print'],
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
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295118/Portfolio_Images/image-asset_8_dharjx.png',
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
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295195/Portfolio_Images/MVIMG_20200319_114136_ogoior.jpg',
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

export default function Home() {
  const tabs = [{ name: 'tab' }, { name: 'tab' }, { name: 'tab' }];

  return (
    <Wrapper>
      <Head>
        <title>Joyanna's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ButtonSlider tabs={tabs}></ButtonSlider>
        <h2>Product Design</h2>
        <ProjectShelf imgs={ProductDesign} />
        <h2>Branding</h2>
        <ProjectShelf imgs={ProjectBranding} />
        <h2>Illustration</h2>
        <ProjectShelf imgs={ProjectsIllustration} />
      </main>
    </Wrapper>
  );
}
