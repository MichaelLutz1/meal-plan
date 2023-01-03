import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import SwipeInfo from "./Components/SwipeInfo";
import DisplayRemainingSwipes from "./Components/DisplayRemainingSwipes";
import Return from "./Components/Return";

export default function App() {
  const [numOfSwipes, setNumOfSwipes] = useState(null);

  return (
    <View style={styles.container}>
      <SwipeInfo swipes={numOfSwipes} setSwipes={setNumOfSwipes} />
      <DisplayRemainingSwipes swipes={numOfSwipes} />
      {numOfSwipes && (
        <Return swipes={numOfSwipes} setSwipes={setNumOfSwipes} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6F90AF",
    alignItems: "center",
    justifyContent: "center",
  },
});
