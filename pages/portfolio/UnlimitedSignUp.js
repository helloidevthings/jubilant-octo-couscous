import styled from "styled-components";
import PortfolioPageTemplate from "./PortfolioPageTemplate";
import Image from "next/image";
import AnimationOnScroll from "../../components/AnimationOnScroll";
import { getProjectById } from "../../data/portfolioData";

const Wrapper = styled(PortfolioPageTemplate)``;

const Heading = styled.h1`
  width: 13ch;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.5;
  border-right: 3px solid var(--secondary);
  animation:
    2s steps(15) 0s 1 normal none running typing,
    0.5s step-end 0s infinite alternate none running effect;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes effect {
    50% {
      border-color: transparent;
    }
  }
`;

const Heading2 = styled.h2`
  display: inline-block;
  position: relative;
  /* margin-bottom: 0.5rem; */

  &:after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--secondary);
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.5s ease-in-out;
  }
`;

const UnlimitedSignUp = () => {
  const project = getProjectById("unlimited-signup");

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
      <section>
        <AnimationOnScroll>
          <hr />
          <Heading2 className="scaleAfter">Problem:</Heading2>
          <h3>
            Drop off rate is really high during the Unlimited sign up form.
          </h3>
          <p>
            We also do most of our sign ups in theatre where we pay an employee
            to walk customers through the sign up process. This wastes time for
            both the customer and the employee.{" "}
          </p>
          <Heading2 className="scaleAfter">Solution:</Heading2>
          <h3>
            Simplify the flow and make it easier for customers to sign up.
          </h3>
          <p>
            I created a new sign up form that is easier to use and understand.
          </p>
        </AnimationOnScroll>
      </section>
      <AnimationOnScroll>
        <figure>
          <Image
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1722869010/Screenshot_2024-08-05_at_10.42.39_AM_cmg3tz.png"
            alt="Current flow for unlimited sign up"
            width={3280}
            height={1246}
            className="colorFade"
            // 3280 × 1246
          />
          <figcaption className="fadeUp" style={{ transitionDelay: ".4s" }}>
            {" "}
            Currently it takes a lot more screens to complete the flow.
          </figcaption>
        </figure>
      </AnimationOnScroll>
      <AnimationOnScroll>
        <figure>
          <Image
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1722869010/Screenshot_2024-08-05_at_10.42.46_AM_olilb6.png"
            alt="Proposed flow for unlimited sign up"
            width={2072}
            height={2114}
            className="colorFade"
          />
          <figcaption className="fadeUp" style={{ transitionDelay: ".4s" }}>
            Proposed flow uses newer UI to simplify the process.
          </figcaption>
        </figure>
      </AnimationOnScroll>
    </Wrapper>
  );
};

export default UnlimitedSignUp;
