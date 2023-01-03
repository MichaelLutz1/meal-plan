import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import SwipeInfo from "./Components/SwipeInfo";
import DisplayRemainingSwipes from "./Components/DisplayRemainingSwipes";
import Return from "./Components/Return";

export default function App() {
  const [numOfSwipes, setNumOfSwipes] = useState(null);

  return (
    <View style={styles.container}>
      {numOfSwipes ? null : (
        <Image
          style={{ position: "absolute", top: 150 }}
          source={require("./assets/blue-hen.png")}
        />
      )}
      <SwipeInfo swipes={numOfSwipes} setSwipes={setNumOfSwipes} />
      <DisplayRemainingSwipes swipes={numOfSwipes} />
      <Return swipes={numOfSwipes} setSwipes={setNumOfSwipes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6F90AF",
  },
});
