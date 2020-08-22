import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
  grid-column: 1;
  @media screen and (min-width: 600px) {
    grid-column: 2/2;
  }
  @media screen and (min-width: 1000px) {
    grid-column: 3/4;
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.color.bg.input};
  margin-left: 16px;
  color: ${({ theme }) => theme.color.font.secondary};
  border: ${({ theme }) => theme.border.size} solid
    ${({ theme }) => theme.color.font.primary};
  padding: 0.5em;
  border-radius: ${({ theme }) => theme.border.radius};
  width: 80%;
  max-width: 30em;
  font-size: 1.5em;
  outline-width: 0;
  &::focus {
    color: inherit;
  }
  &::placeholder {
    color: inherit;
  }
`;

export const StyledSearch = styled.i`
  color: ${({ theme }) => theme.color.font.secondary};
  position: absolute;
  right: 40px;
  top: 20px;
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(1.6);
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-radius: 100%;
  }
  &::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 8px;
    background: currentColor;
    transform: rotate(-45deg);
    top: 10px;
    left: 12px;
  }
`;
