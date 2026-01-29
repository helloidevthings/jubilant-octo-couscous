import styled from "styled-components";
import ThemeButton from "./ThemeButton";
import BackArrowButton from "./BackArrowButton";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 100;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
`;

const Navigation = ({ showBackButton = false }) => {
  return (
    <NavContainer>
      <LeftNav>{showBackButton && <BackArrowButton />}</LeftNav>
      <RightNav>
        <ThemeButton />
      </RightNav>
    </NavContainer>
  );
};

export default Navigation;
