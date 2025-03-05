import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';

const Block = styled.div`
  display: grid;
  grid-template-rows: minmax(10rem, 12rem) auto 1fr auto;
  justify-items: center;
  overflow: hidden;
  border-radius: 10px;
  height: auto;
  padding: 0;
  background: linear-gradient(180deg, #d9d9d970 0%, #d9d9d920 100%);
  font-family: 'Azo Sans';
  transform: scale(1);
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 20px #8787874d;
    transition: all 0.125s ease-in-out;
  }

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
  `}
`;

const BlockImageWrap = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 10rem;
  max-width: 340px;
  overflow: hidden;
  padding: 0;
  margin: 0;

  @media (min-width: 600px) {
    max-width: 375px;
    height: 190px;
  }

  ${(props) =>
    props.$expanded &&
    `
    border-radius: 100%;
    width: 150px;
    height: 150px;
    margin-top: 1em;
    transition: 0.25s ease-in-out;

    @media (min-width: 600px) {
      width: 200px;
      height: 200px;
    }

    `}
`;

const BlockImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BlockTitle = styled.h3`
  font-size: 1.25rem;
  text-transform: capitalize;
  padding: 0.65em 0.5em 0.5em;
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
  margin: 0.15em 1.25em 1.65em 1.8em;
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

const Card = ({ title, id, description, image, alt, links }) => {
  const [expanded, setExpand] = useState(false);

  return (
    <Block
      key={title}
      id={id}
      $expanded={expanded}
      onClick={() => setExpand(!expanded)}
    >
      <BlockImageWrap $expanded={expanded}>
        <BlockImage fill src={image} alt={alt} />
      </BlockImageWrap>
      <BlockTitle>{title}</BlockTitle>
      <VisuallyHidden $expanded={expanded}>
        <BlockDescription>{description}</BlockDescription>
        {links && (
          <BlockLinks>
            {links &&
              links.map((link) => (
                <BlockLink
                  key={link.href}
                  href={link.href}
                  target={link.target}
                >
                  {link.text}
                </BlockLink>
              ))}
          </BlockLinks>
        )}
      </VisuallyHidden>
    </Block>
  );
};

export default Card;
