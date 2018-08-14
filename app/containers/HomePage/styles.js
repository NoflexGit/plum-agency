import styled from 'styled-components';

export const HomePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const HomePageHero = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`;

export const HomePageHeroOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
`;

export const HomePageHeroImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b811266a4cf56733a98b08047ffe3ed&auto=format&fit=crop&w=2100&q=80");
  background-size: cover;
  background-position: center;
  flex: 1;
  display: flex
`;
