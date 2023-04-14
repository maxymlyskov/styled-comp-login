import React from "react";
import { useState, useContext } from "react";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { Toggle } from "./Toggle";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
`;

const Menu = styled.nav`
  font-family: "Open Sans";
  display: ${(p) => (p.open ? "block" : "none")};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
  background: ${(p) => p.theme.bodyBackgroundColor};

  @media screen and (min-width: 768px) {
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    background: none;
    left: initial;
    top: initial;
  }
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: ${(p) => p.theme.bodyFontColor};
    margin: 5px 0;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "")};
  color: ${(p) => p.theme.bodyFontColor};
`;

function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>

        <StyledLink to="/login" isActive={pathname === "/login"}>
          Login
        </StyledLink>
        <Toggle onToggle={setTheme} isActive={id === "dark"} />
      </Menu>
    </HeaderWrapper>
  );
}

export default Header;
