import React from "react";
import {
  Container,
  Title,
  InfoWrapper,
  Info,
  InfoTitle,
  InfoColor,
  InfoBoxTop,
  InfoBoxBottom,
} from "./styles";
import { Box } from "../Layout/Layout";

const Gnome = ({
  name,
  age,
  height,
  weight,
  hairColor,
  friends,
  professions,
  thumbnail,
}) => {
  return (
    <Container data-testid="gnome">
      <Title>{name}</Title>
      <InfoWrapper data-testid="info" bgUrl={thumbnail}>
        <InfoBoxTop>
          <Box direction="column" p="0 0.7em" gap="0.6em">
            <Box align="baseline" justify="center" gap="0.6em">
              <InfoTitle>Height</InfoTitle>
              <Info>{height.toFixed(0)}cm</Info>
            </Box>
            <Box align="baseline" justify="center" gap="0.6em">
              <InfoTitle>Weight</InfoTitle>
              <Info>{weight.toFixed(0)}cm</Info>
            </Box>
          </Box>
          <Box direction="column" p="0 0.7em" gap="0.6em">
            <InfoTitle>Hair color</InfoTitle>
            <InfoColor color={hairColor.toLowerCase()}> {hairColor}</InfoColor>
          </Box>
          <Box direction="column" p="0 0.7em" gap="0.6em">
            <InfoTitle>Age</InfoTitle>
            <Info>{age}y</Info>
          </Box>
        </InfoBoxTop>
        <InfoBoxBottom>
          <Box direction="column" p="0 0.7em" gap="0.6em">
            <Box align="center" justify="center" gap="0.6em" fw="wrap">
              <InfoTitle>Friends</InfoTitle>
              {friends.length === 0 && <Info>No friends found :(</Info>}
              {friends &&
                friends.map((friend, i) => <Info key={i}>{friend}</Info>)}
            </Box>
            <Box align="center" justify="center" gap="0.6em" fw="wrap">
              <InfoTitle>Professions</InfoTitle>
              {professions.map((profession, i) => (
                <Info key={i}>{profession}</Info>
              ))}
            </Box>
          </Box>
        </InfoBoxBottom>
      </InfoWrapper>
    </Container>
  );
};

export default Gnome;
