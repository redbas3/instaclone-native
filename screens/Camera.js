import { View, Text } from "react-native";

export default function Camera() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>Camera</Text>
    </View>
  );
}
