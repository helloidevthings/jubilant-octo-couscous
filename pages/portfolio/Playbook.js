import styled from 'styled-components';
import Image from 'next/image';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import { getProjectById } from '../../data/portfolioData';

const Wrapper = styled(PortfolioPageTemplate)``;

const Playbook = () => {
  const project = getProjectById('playbook');

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
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263618/Portfolio_Images/elainedrawings_iy7pni.png"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
        <figcaption>
          Custom character creation for the author of a book
        </figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263603/Portfolio_Images/elainedrawing3_fci2rk.jpg"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263603/Portfolio_Images/elainedrawing_v5yrvc.jpg"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263602/Portfolio_Images/elainebook_jtwipw.jpg"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263604/Portfolio_Images/elephantpaint_dz9jxr.jpg"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263604/Portfolio_Images/elainesketches_zzwn8w.jpg"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263605/Portfolio_Images/playbookbook_wgrnfm.png"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263604/Portfolio_Images/elainesketches_zzwn8w.jpg"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
      </figure>
    </Wrapper>
  );
};

export default Playbook;
