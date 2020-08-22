import styled from "styled-components";

const transition = "250ms cubic-bezier(0, 1, 0.58, 1)";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 25em;
  padding: 1em;
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const Title = styled.h2`
  color: ${({ theme: { color } }) => color.font.active};
  background-color: ${({ theme: { color } }) => color.bg.secondary};
  text-align: center;
  padding: 1em;
  font-size: 1.3em;
  margin-bottom: 0.3em;
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background: url(${(props) => props.bgUrl});
  width: 100%;
  height: 20em;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const InfoBoxTop = styled.div`
  transition: opacity ${transition}, transform ${transition};
  transform: translate3d(0, -30%, 0); /*for GPU performance */
  opacity: 0;
  margin-top: 1em;

  display: flex;
  background-color: ${({ theme }) => theme.color.bg.info};
  height: 25%;
  justify-content: center;
  width: 80%;
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius};

  ${InfoWrapper}:hover & {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export const InfoBoxBottom = styled(InfoBoxTop)`
  position: absolute;
  bottom: 0;
  height: 30%;
  width: 100%;
  transform: translate3d(0, 10%, 0);
  padding: 1em;
  margin: 0;
  align-items: center;
`;
export const Info = styled.h3`
  text-align: center;
  font-size: 0.7em;
  color: ${({ theme: { color } }) => color.font.primary};
`;

export const InfoColor = styled(Info)`
  color: white;
  background-color: ${(props) => props.color};
  padding: 0.4em;
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const InfoTitle = styled(Info)`
  font-weight: bold;
  font-size: 1em;
  color: ${({ theme }) => theme.color.font.secondary};
`;
