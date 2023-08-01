import { View, Text, TouchableOpacity } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      file
      likes
      user {
        username
        avatar
      }
      caption
      createdAt
    }
  }
`;

export default function Feed({ navigation }) {
  const { data, error } = useQuery(FEED_QUERY);
  console.log(data);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>Feed</Text>
    </View>
  );
}
