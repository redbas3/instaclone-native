import {
  View,
  ActivityIndicator,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { gql, useQuery } from "@apollo/client";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";
import ScreenLayout from "../components/ScreenLayout";

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
  const { data, loading } = useQuery(FEED_QUERY);
  const renderPhoto = ({ item: photo }) => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ color: "white" }}>{photo.caption}</Text>
      </View>
    );
  };
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeFeed}
        keyExtractor={(item) => item.id}
        renderItem={renderPhoto}
      ></FlatList>
      <Text style={{ color: "white" }}>Loaded</Text>
    </ScreenLayout>
  );
}
