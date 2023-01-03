import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import SwipeInfo from "./Components/SwipeInfo";
import DisplayRemainingSwipes from "./Components/DisplayRemainingSwipes";
import MealPlan from "./Components/MealPlan";

export default function App() {
  const [numOfSwipes, setNumOfSwipes] = useState(null);
  const [mealPlan, setMealPlan] = useState(null);
  return (
    <View style={styles.container}>
      {numOfSwipes ? null : (
        <Image
          style={{ position: "absolute", top: 120 }}
          source={require("./assets/blue-hen.png")}
        />
      )}
      <SwipeInfo swipes={numOfSwipes} setSwipes={setNumOfSwipes} />
      <DisplayRemainingSwipes
        mealPlan={mealPlan}
        setMealPlan={setMealPlan}
        swipes={numOfSwipes}
        setSwipes={setNumOfSwipes}
      />
      <MealPlan
        swipes={numOfSwipes}
        setMealPlan={setMealPlan}
        mealPlan={mealPlan}
      />
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
