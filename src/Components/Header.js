import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {

  const Header = styled.div`
    background-color: #ADD8E6;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const HeaderLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
  `;

  const HeaderLink = styled(Link)`
    border: solid 1px black;
    text-decoration: none;
    margin: 1em;
  `;

  const StyledLink = styled(Link)`
    align-items: center;
    color: black;
    display: flex;
    justify-content: center;
    margin: 1rem;
    text-decoration: none;
    
  `;

  return (
    <div>
      <Header>
        <h1>Movement Mastering</h1>
          <HeaderLinkContainer>
            <HeaderLink>
              <StyledLink to="/">Home</StyledLink>
            </HeaderLink>
            <HeaderLink>
              <StyledLink to="/faq">FAQ</StyledLink>
            </HeaderLink>
          </HeaderLinkContainer>
      </Header>
    </div>
  );
}

export default Header;