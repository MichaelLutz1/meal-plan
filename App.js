import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import SwipeInfo from "./Components/SwipeInfo";
import DisplayRemainingSwipes from "./Components/DisplayRemainingSwipes";
import Return from "./Components/Return";

export default function App() {
  const [numOfSwipes, setNumOfSwipes] = useState(null);
  const [mealPlan, setMealPlan] = useState(null);

  return (
    <View style={styles.app}>
      <View style={styles.container}>
        {numOfSwipes ? null : (
          <Image source={require("./assets/blue-hen.png")} />
        )}
        <SwipeInfo swipes={numOfSwipes} setSwipes={setNumOfSwipes} />
        <DisplayRemainingSwipes swipes={numOfSwipes} />
        <Return swipes={numOfSwipes} setSwipes={setNumOfSwipes} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  app: {
    backgroundColor: "#6F90AF",
    flex: 1,
  },
});
