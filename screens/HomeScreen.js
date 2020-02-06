import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  return (
    <View
      style={{
        backgroundColor: "#066eff",
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
      }}
    >
      <Text style={{ fontSize: 45 }}>hello world</Text>
    </View>
  );
}
