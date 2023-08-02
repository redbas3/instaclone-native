import React from "react";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";

const Container = styled.View``;
const Header = styled.View``;
const UserAvatar = styled.Image``;
const Username = styled.Text`
  color: white;
`;
const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Likes = styled.Text`
  color: white;
`;
const Caption = styled.View``;
const CaptionText = styled.Text`
  color: white;
`;

export default function Photo({ id, user, caption, file, isLiked, likes }) {
  const { width, height } = useWindowDimensions();
  return (
    <Container>
      <Header>
        <UserAvatar />
        <Username>{user.username}</Username>
      </Header>
      <File style={{ width, height: height - 500 }} source={{ uri: file }} />
      <Actions>
        <Action />
        <Action />
      </Actions>
      <Likes>{likes === 1 ? "1 lik" : `${likes} likes`}</Likes>
      <Caption>
        <Username>{user.username}</Username>
        <CaptionText>{caption}</CaptionText>
      </Caption>
    </Container>
  );
}
