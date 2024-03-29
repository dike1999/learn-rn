import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

export default function Message({ navigation }: RootTabScreenProps<"Message">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab1 Message</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
