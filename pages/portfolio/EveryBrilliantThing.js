import styled from 'styled-components';
import Image from 'next/image';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import { getProjectById } from '../../data/portfolioData';

const Wrapper = styled(PortfolioPageTemplate)``;

const EveryBrilliantThing = () => {
  const project = getProjectById('every-brilliant-thing');

  return (
    <Wrapper
      projectBrief={{
        title: project.title,
        description: project.description,
        date: project.date,
        tags: project.tag,
        color: project.color,
      }}
    >
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263617/Portfolio_Images/everybrilliantthing3_w19dnj.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1500 × 1000
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263626/Portfolio_Images/everybrilliantthingcards_qbrbpp.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263627/Portfolio_Images/everybrilliantthinggroup_v47zb3.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1500 × 883
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263605/Portfolio_Images/everybrilliantthing2_isskt8.jpg"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1500 × 883
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263604/Portfolio_Images/everybrilliantthing_kqgwhy.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1429 × 892
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263602/Portfolio_Images/everybrilliantthingposter_h6ei6s.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1429 × 892
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263603/Portfolio_Images/everybrilliantthingstamps_i1vuad.jpg"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1429 × 892
        />
        <figcaption></figcaption>
      </figure>
    </Wrapper>
  );
};

export default EveryBrilliantThing;
