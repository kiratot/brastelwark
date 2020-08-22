import styled from "styled-components";

const transition = "250ms cubic-bezier(0, 1, 0.58, 1)";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.bg.primary};
  margin-bottom: 3em;
`;
export const HeaderWrapper = styled.header`
  color: ${({ theme }) => theme.color.font.secondary};
  padding: 1em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 6em;
  @media screen and (min-width: 600px) {
    justify-content: space-between;
    margin: 0 4.3em;
  }
`;
export const Logo = styled.span`
  padding: 0.7em 1em;
  background-color: ${({ theme }) => theme.color.bg.info};
  border-radius: 0.3em;
  font-size: 1.3em;
  font-weight: bold;
`;

export const ColorModeContainer = styled.div`
  transition: color ${transition}, background-color ${transition};
  padding: 0.3em;
  border-radius: ${({ theme }) => theme.border.radius};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.bg.secondary};
    svg {
      color: ${({ theme }) => theme.color.font.active};
    }
  }

  svg {
    color: ${({ theme }) => theme.color.font.secondary};
  }
`;
