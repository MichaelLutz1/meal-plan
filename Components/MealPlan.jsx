import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";
export default function MealPlan(props) {
  if (!props.swipes || props.mealPlan) {
    return null;
  }
  return (
    <>
      <Text style={{ color: "#ffe01c", fontSize: 25, fontWeight: "bold" }}>
        And Select Your Meal Plan:
      </Text>
      <View style={styles.container}>
        <Pressable
          style={styles.button}
          color={"#ffe01c"}
          onPress={() => props.setMealPlan("14")}
        >
          <Text style={styles.text}>14 per week</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          color={"#ffe01c"}
          onPress={() => props.setMealPlan("175")}
        >
          <Text style={styles.text}>175 per semester</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "#0068aa",
    margin: 35,
    marginTop: 50,
    width: 140,
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "gold",
  },
});
