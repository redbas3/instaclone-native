import { View, Text, TouchableOpacity } from "react-native";
import { logUserOut } from "../apollo";

export default function Feed({ navigation }) {
  const { data } = useQuery();
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
