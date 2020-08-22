const { default: styled } = require("styled-components");

export const HeaderContainer = styled.section`
  background-color: ${({ theme }) => theme.color.bg.secondary};
  display: flex;
  flex-direction: column;
  padding: 2em 1em;
  margin: 0 1em;
  border-radius: 0.3em;
  margin-bottom: 3em;
  line-height: 1.7em;
  gap: 1em;
  grid-column: 1;
  @media screen and (min-width: 600px) {
    grid-column: 1/2;
  }
  @media screen and (min-width: 1000px) {
    grid-column: 1/3;
  }
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.color.font.active};
  font-size: 1.5em;
  font-weight: 700;
`;
export const SubTitle = styled.h2`
  font-weight: 500;
  color: ${({ theme }) => theme.color.bg.info};
  font-size: 1.3em;
  margin-bottom: 1em;
`;

export const Tip = styled.p`
  color: ${({ theme }) => theme.color.bg.info};
  font-size: 1em;
`;
