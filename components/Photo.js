import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useWindowDimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View``;
const Header = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;
const UserAvatar = styled.Image`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
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
  const navigation = useNavigation();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const [imageHeight, setImageHeight] = useState(screenHeight - 450);
  useEffect(() => {
    Image.getSize(file, (width, height) => {
      setImageHeight(height / (width / screenWidth));
    });
  }, []);

  return (
    <Container>
      <Header onPress={() => navigation.navigate("Profile")}>
        <UserAvatar resizeMode="cover" source={{ uri: user.avatar }} />
        <Username>{user.username}</Username>
      </Header>
      <File
        resizeMode="cover"
        style={{ width: screenWidth, height: imageHeight }}
        source={{ uri: file }}
      />
      <Actions>
        <Action />
        <Action />
      </Actions>
      <Likes>{likes === 1 ? "1 lik" : `${likes} likes`}</Likes>
      <Caption>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Username>{user.username}</Username>
        </TouchableOpacity>
        <CaptionText>{caption}</CaptionText>
      </Caption>
    </Container>
  );
}
