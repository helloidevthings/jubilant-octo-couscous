import Head from 'next/head';
import styled from 'styled-components';
import { useState, useMemo } from 'react';
// import Providers from '../public/Providers';
import ProjectShelf from '../components/ProjectShelf';
import PortfolioFilter from '../components/PortfolioFilter';

import ThemeButton from '../components/ThemeButton';
// import { SiteTakeOver } from './SiteTakeOver';
// import { UserTesting } from './UserTesting';
// import { ProductDesign } from './ProductDesign';
// import { ProjectBranding } from './ProjectBranding';
// import { ProjectsIllustration } from './ProjectsIllustration';

const Wrapper = styled.main`
  transition: all 0.3s ease-in-out;
  background: var(--bg);
  color: var(--text);
`;

const Intro = styled.header`
  padding: 1rem 0.5rem 2rem;
  text-align: center;
`;

const ButtonGroup = styled.div`
  text-align: right;
  padding: 1rem;
  min-height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1722873615/regalcolors_lp8mxa.png',
  },
  {
    title: 'Ghostbusters',
    description: 'Animation to promote ticket sales for Ghostbusters',
    date: '2024',
    alt: 'alt',
    tag: ['Development', 'Design'],
    path: '/portfolio/Ghostbusters',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1722873681/regal-frozen_d42rmj.png',
  },
  {
    title: 'Borderlands',
    description: 'Animation to promote ticket sales for Borderlands',
    date: '2024',
    alt: 'alt',
    tag: ['Development', 'Design'],
    path: '/portfolio/Borderlands',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1722869205/test_lhmdii.gif',
  },
  {
    title: 'Deadpool',
    description: 'Animation to promote ticket sales for Deadpool and Wolverine',
    date: '2024',
    alt: 'alt',
    tag: ['Development', 'Design'],
    path: '/portfolio/Deadpool',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1722870588/dpw_lxafdl.gif',
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
    path: '/portfolio/UnlimitedSignUp',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1722869010/Screenshot_2024-08-05_at_10.43.18_AM_cwb5zw.png',
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
  const [selectedTags, setSelectedTags] = useState([]);

  // Combine all portfolio items
  const allPortfolioItems = useMemo(() => {
    return [
      ...SiteTakeOver,
      ...UserTesting,
      ...ProductDesign,
      ...ProjectsIllustration,
      ...ProjectBranding,
    ];
  }, []);

  // Extract unique tags (normalize case)
  const uniqueTags = useMemo(() => {
    const tagSet = new Set();
    allPortfolioItems.forEach((item) => {
      item.tag.forEach((tag) => {
        // Normalize tag capitalization
        tagSet.add(tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase());
      });
    });
    return Array.from(tagSet).sort();
  }, [allPortfolioItems]);

  // Split portfolio items into matched and unmatched
  const { matchedItems, unmatchedItems } = useMemo(() => {
    if (selectedTags.length === 0) {
      return { matchedItems: allPortfolioItems, unmatchedItems: [] };
    }

    const matched = [];
    const unmatched = [];

    allPortfolioItems.forEach((item) => {
      const hasMatchingTag = item.tag.some((tag) => {
        const normalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();
        return selectedTags.includes(normalizedTag);
      });

      if (hasMatchingTag) {
        matched.push(item);
      } else {
        unmatched.push(item);
      }
    });

    return { matchedItems: matched, unmatchedItems: unmatched };
  }, [allPortfolioItems, selectedTags]);

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSelectedTags([]);
  };

  return (
    // <Providers>
    <Wrapper>
      <Head>
        <title>Joyanna's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/qnh7yyz.css"
        ></link>
      </Head>
      <main>
        <ButtonGroup>
          <ThemeButton />
        </ButtonGroup>
        <Intro>
          <h1>Joyanna's Portfolio</h1>
          <h2>Everything is in progress...</h2>
          <p>
            Every page is a draft that I'm currently working on. ☠️
            <br />
            Feel free to reach out for my lastest product design work.
          </p>
        </Intro>

        <PortfolioFilter
          tags={uniqueTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          onClearFilters={handleClearFilters}
        />

        {selectedTags.length === 0 ? (
          <PortfolioSection>
            <h2>All Projects</h2>
            <ProjectShelf imgs={allPortfolioItems} />
          </PortfolioSection>
        ) : (
          <>
            <PortfolioSection>
              <h2>Filtered by: {selectedTags.join(', ')}</h2>
              <ProjectShelf imgs={matchedItems} />
            </PortfolioSection>

            {unmatchedItems.length > 0 && (
              <PortfolioSection>
                <h2>Other Projects</h2>
                <ProjectShelf imgs={unmatchedItems} />
              </PortfolioSection>
            )}
          </>
        )}
      </main>
    </Wrapper>
    // </Providers>
  );
}
