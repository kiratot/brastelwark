import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
`;

//utility container for quick prototyping
export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width: ${(props) => props.w};
  max-width: ${(props) => props.mw};
  padding: ${(props) => props.p};
  flex-wrap: ${(props) => props.fw};
  gap: ${(props) => props.gap};
`;

export const GridContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(1, auto);
  grid-auto-rows: minmax(3em, auto);
  gap: 1em;
  margin: 2em 0.5em;
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, auto);
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, auto);
  }
`;
