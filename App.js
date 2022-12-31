import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import SwipeInfo from "./Components/SwipeInfo";
import DisplayRemainingSwipes from "./Components/DisplayRemainingSwipes";
import Return from "./Components/Return";

export default function App() {
  const [numOfSwipes, setNumOfSwipes] = useState(null);
  function calculateDifferenceInDate() {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const endOfSemester = { day: 25, month: 5 };
    if (numOfSwipes) {
    }
  }
  return (
    <View style={styles.container}>
      {numOfSwipes ? null : <SwipeInfo setSwipes={setNumOfSwipes} />}
      <DisplayRemainingSwipes swipes={numOfSwipes} />
      {numOfSwipes ? <Return setSwipes={setNumOfSwipes} /> : null}
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
