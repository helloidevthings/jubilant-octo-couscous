import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  width: 375px;
  min-height: 275px;
  height: auto;
  padding: 0;
  background: linear-gradient(180deg, #d9d9d970 0%, #d9d9d920 100%);
  font-family: 'Azo Sans';
  transform: scale(1);
  transition: all 0.5s ease-in-out;

  ${(props) =>
    props.$expanded &&
    `
    box-shadow: 0 0 20px #8787874d;
    height: auto;
    transform: scale(1.02);

    p {
      opacity: 1;
      transform: scale(1);
      height: auto;
      transition: opacity 0.5s ease-in-out;
    }

    figure {
      border-radius: 100%;
      width: 150px;
      height: 150px;
      margin-top: 1em;
      transition: 0.25s ease-in-out;
    }
  `}
`;

const BlockImageWrap = styled.figure`
  position: relative;
  width: 375px;
  height: 210px;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

const BlockImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BlockTitle = styled.h3`
  font-size: 1.25rem;
  text-transform: capitalize;
  padding: 0.75em 0.5em 0.5em;
  text-align: center;
`;

const VisuallyHidden = styled.div`
  opacity: 0;
  height: 0;
  overflow: hidden;

  ${(props) => props.$expanded && `opacity: 1; height: auto;`}
`;

const BlockDescription = styled.p`
  font-size: 1rem;
  font-weight: 500;
  /* text-align: left; */
  /* margin: 0.15em 1.25em 1.65em 1.8em; */
  margin: 0.15em 1.25em 1.65em;
  opacity: 0;
  transform-origin: top center;
  transform: scale(0);
  height: 0;
`;

const BlockLinks = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-self: flex-end;
  border-top: 2px solid #d9d9d970;
`;

const BlockLink = styled.a`
  display: block;
  position: relative;
  padding: 0.5em 1em;
  flex: 1 1 40%;
  text-decoration: none;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: scaleY(0);
    transform-origin: bottom center;
    transition: transform 0.25s ease-in-out;
  }

  &:hover {
    &:after {
      background: linear-gradient(180deg, #d9d9d970 0%, #d9d9d920 100%);
      transform: scaleY(1);
    }
  }

  &:nth-child(2) {
    border-left: 2px solid #d9d9d970;
  }
`;

const Card = ({ title, id, desc, image = {}, links }, i) => {
  const [expanded, setExpand] = useState(false);
  <Block
    key={title}
    id={id + i}
    $expanded={expanded}
    onClick={() => setExpand(!expanded)}
  >
    <BlockImageWrap>
      <BlockImage fill src={image.src} alt={image.alt} />
    </BlockImageWrap>
    <BlockTitle>{title}</BlockTitle>
    <VisuallyHidden $expanded={expanded}>
      <BlockDescription>{desc}</BlockDescription>
      {links && (
        <BlockLinks>
          {links &&
            links.map(({ text, id, href, target }, i) => (
              <BlockLink
                key={id + i}
                href={href}
                target={target ? target : '_blank'}
              >
                {text}
              </BlockLink>
            ))}
        </BlockLinks>
      )}
    </VisuallyHidden>
  </Block>;
};

export default Card;
