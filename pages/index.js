import Head from "next/head";
import styled from "styled-components";
import { useState, useMemo } from "react";
import ProjectShelf from "../components/ProjectShelf";
import PortfolioFilter from "../components/PortfolioFilter";
import YearTimeline from "../components/YearTimeline";
import Navigation from "../components/Navigation";
import { portfolioProjects } from "../data/portfolioData";

const Wrapper = styled.main`
  transition: all 0.3s ease-in-out;
  background: var(--bg);
  color: var(--text);
  h1 {
    margin-bottom: 0.5rem;
    font-family: loos-extrawide, sans-serif;
  }
`;

const Intro = styled.header`
  padding: 5rem 0.5rem 2rem;
  text-align: center;
`;

const PortfolioSection = styled.section`
  padding: 1rem 0.5rem;
  background: var(--gradient90);
  /* backdrop-filter: saturate(180%) blur(10px); */

  @media (min-width: 768px) {
    padding: 2rem 3rem;
  }

  h2 {
    font-size: 3rem;
  }
`;

const SiteTakeOver = [
  {
    title: "Inside Out 2",
    description: "Animation to promote ticket sales for Inside Out 2",
    date: "2024",
    alt: "alt",
    tag: ["Development"],
    path: "/portfolio/IO2",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1722873615/regalcolors_lp8mxa.png",
  },
  {
    title: "Ghostbusters",
    description: "Animation to promote ticket sales for Ghostbusters",
    date: "2024",
    alt: "alt",
    tag: ["Development"],
    path: "/portfolio/Ghostbusters",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1722873681/regal-frozen_d42rmj.png",
  },
  {
    title: "Borderlands",
    description: "Animation to promote ticket sales for Borderlands",
    date: "2024",
    alt: "alt",
    tag: ["Development"],
    path: "/portfolio/Borderlands",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1722869205/test_lhmdii.gif",
  },
  {
    title: "Deadpool",
    description: "Animation to promote ticket sales for Deadpool and Wolverine",
    date: "2024",
    alt: "alt",
    tag: ["Development"],
    path: "/portfolio/Deadpool",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1722870588/dpw_lxafdl.gif",
  },
];

const UserTesting = [
  {
    title: "Seats First Booking Test",
    description: "User Test showing that seats first is the best option",
    date: "2023",
    alt: "alt",
    tag: ["App", "Testing"],
    path: "/portfolio/SeatsFirst",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/usertesting2_xd5fao",
  },
  {
    title: "Unlimited Sign Up",
    description: "User Test showing saves 48% of the time it takes to sign up",
    date: "2024",
    alt: "alt",
    tag: ["App", "Testing"],
    path: "/portfolio/UnlimitedSignUp",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1722869010/Screenshot_2024-08-05_at_10.43.18_AM_cwb5zw.png",
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
    title: "Cadre5 Website",
    description: "Website for a B2B company in the tech industry",
    date: "2021",
    alt: "alt",
    tag: ["Web", "Development"],
    path: "/portfolio/Cadre5",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/cadre5home_kwsufj.png",
  },
  // {
  //   title: 'Seat Maps',
  //   description: 'Branding for a gym in Mexico near the beach',
  //   date: '2020',
  //   alt: 'alt',
  //   tag: ['Web', 'UI/UX'],
  //   path: '/portfolio/SeatMaps',
  //   src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1670295122/Portfolio_Images/Screen_Shot_2020-03-23_at_11.21.55_AM_rcbflw.png',
  // },
  // {
  //   title: 'Marketing Consent',
  //   description: 'Checkbox for Marketing Consents on the Cineworld Website',
  //   date: '2019',
  //   alt: 'alt',
  //   tag: ['Web', 'UI/UX'],
  //   path: '/portfolio/MarketingConsent',
  //   src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/booking2_zhipb9.png',
  // },
  {
    title: "Fillauer",
    description: "Website Design for a Prosthetic Company",
    date: "2018",
    alt: "alt",
    tag: ["Web"],
    path: "/portfolio/Fillauer",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/fillauerlogo_hmmm7c",
  },
];

const ProjectsIllustration = [
  {
    title: "Data Visualization",
    description: "Data Visualization for a B2B company in the tech industry",
    date: "2018",
    alt: "alt",
    tag: ["Web"],
    path: "/portfolio/DataVisualization",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/cadre5illustrators_jydm1q",
  },
  {
    title: "Cadre5 404 Page",
    description: "Custom Illustration for a 404 Page",
    date: "2018",
    alt: "alt",
    tag: ["Web", "Illustration"],
    path: "/portfolio/Cadre5404",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/cadre5404_i1v8b9",
  },
  {
    title: "Branding Study Poster",
    description:
      "Custom illustration (using food) for a poster about brand perceptions",
    alt: "alt",
    date: "2016",
    tag: ["Illustration", "Print"],
    path: "/portfolio/FoodPoster",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/foodgirl3_mw5gnm",
  },
  {
    title: "Heartmenders",
    description: "Illustration for a children's book",
    alt: "alt",
    date: "2017",
    tag: ["Illustration", "Print"],
    path: "/portfolio/Heartmenders",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/heartmenders2_cplcxd",
  },
  {
    title: "Playbook",
    description:
      "Custom illustration of the Author to help explain the book to the reader",
    date: "2017",
    alt: "alt",
    tag: ["Illustration", "Print"],
    path: "/portfolio/Playbook",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/elainedrawing3_fci2rk",
  },
];

const ProjectBranding = [
  {
    title: "Barbell Playa",
    description: "Branding for a gym in Mexico near the beach",
    date: "2018",
    alt: "alt",
    tag: ["branding", "print"],
    path: "/portfolio/Barbell",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/barbellplaya4_qszh6q",
  },
  {
    title: "Every Brilliant Thing",
    description:
      "Branded Experience for a play, with installation, print and digital media",
    alt: "alt",
    tag: ["Branding", "Print"],
    path: "/portfolio/EveryBrilliantThing",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/everybrilliantthinggroup_v47zb3",
  },
  {
    title: "Bourbon & Bird",
    description:
      "Brand for a restaurant speacializing in bourbon and chicken wings.",
    alt: "alt",
    tag: ["Branding", "Print"],
    path: "/portfolio/BourbonBird",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263603/Portfolio_Images/bourbonbird2_na8l4c.png",
  },
  {
    title: "Level Up Buttercup",
    description:
      "Logo for a local Dungeons & Dragons Group. Tshirts, Website, Streaming Frame and Animations",
    date: "2018",
    alt: "alt",
    tag: ["Branding", "Web", "Print"],
    path: "/portfolio/LevelUpButtercup",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/buttercuplogo_viqyda",
  },
  {
    title: "Curious Dog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2015",
    alt: "alt",
    tag: ["Branding", "Print"],
    path: "/portfolio/CuriousDog",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/curiousdoglogo_zjy5yh",
  },
  {
    title: "Old City Wine Bar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2015",
    alt: "alt",
    tag: ["Branding", "Print"],
    path: "/portfolio/OldCityWineBar",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/oldcitywinebar_dxg6zi",
  },
  {
    title: "Brochure for a College",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2012",
    alt: "alt",
    tag: ["Print"],
    path: "/portfolio/Brochure",
    src: "https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/brochurch6_qu4cwb",
  },
];

export default function Home() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);

  // Use centralized portfolio data
  const allPortfolioItems = useMemo(() => {
    return portfolioProjects;
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

  // Extract unique years
  const uniqueYears = useMemo(() => {
    const yearSet = new Set();
    allPortfolioItems.forEach((item) => {
      if (item.date) {
        // Extract year from date string
        const year = item.date.toString().substring(0, 4);
        yearSet.add(year);
      }
    });
    return Array.from(yearSet).sort((a, b) => parseInt(a) - parseInt(b));
  }, [allPortfolioItems]);

  // Split portfolio items into matched and unmatched (AND logic)
  const { matchedItems, unmatchedItems } = useMemo(() => {
    // If no filters selected, show all items
    if (selectedTags.length === 0 && selectedYears.length === 0) {
      return { matchedItems: allPortfolioItems, unmatchedItems: [] };
    }

    const matched = [];
    const unmatched = [];

    allPortfolioItems.forEach((item) => {
      // Check tag matching (if any tags selected)
      let matchesTags =
        selectedTags.length === 0 ||
        item.tag.some((tag) => {
          const normalizedTag =
            tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();
          return selectedTags.includes(normalizedTag);
        });

      // Check year matching (if any years selected)
      let matchesYears = selectedYears.length === 0;
      if (selectedYears.length > 0 && item.date) {
        const itemYear = item.date.toString().substring(0, 4);
        matchesYears = selectedYears.includes(itemYear);
      }

      // AND logic: item must match both filters
      if (matchesTags && matchesYears) {
        matched.push(item);
      } else {
        unmatched.push(item);
      }
    });

    return { matchedItems: matched, unmatchedItems: unmatched };
  }, [allPortfolioItems, selectedTags, selectedYears]);

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? [] : [tag]
    );
  };

  const handleYearToggle = (year) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  const handleClearYearFilters = () => {
    setSelectedYears([]);
  };

  const handleClearFilters = () => {
    setSelectedTags([]);
    setSelectedYears([]);
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
          href="https://use.typekit.net/kim6tqe.css"
        ></link>
      </Head>
      <Navigation showBackButton={false} />
      <main>
        <Intro>
          <h1>Welcome...</h1>
          <h2>Test site for all of my work</h2>
        </Intro>

        <PortfolioFilter
          tags={uniqueTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          onClearFilters={handleClearFilters}
        />

        <YearTimeline
          years={uniqueYears}
          selectedYears={selectedYears}
          onYearToggle={handleYearToggle}
          onClearFilters={handleClearYearFilters}
        />

        {selectedTags.length === 0 && selectedYears.length === 0 ? (
          <PortfolioSection>
            <h2>All Projects</h2>
            <ProjectShelf imgs={allPortfolioItems} />
          </PortfolioSection>
        ) : (
          <>
            <PortfolioSection>
              <h2>
                {selectedTags.length > 0 && `Tags: ${selectedTags.join(", ")}`}
                {selectedTags.length > 0 && selectedYears.length > 0 && " | "}
                {selectedYears.length > 0 &&
                  `Years: ${selectedYears.join(", ")}`}
              </h2>
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
