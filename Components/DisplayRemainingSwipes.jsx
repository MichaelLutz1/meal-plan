import React from "react";
import { Text, Button, StyleSheet } from "react-native";
function DisplayRemainingSwipes(props) {
  if (!props.mealPlan || !props.swipes) {
    return null;
  }
  let display = null;
  let dayOfMonth = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let dayOfWeek = new Date().getDay();
  let date = `${month}-${dayOfMonth}`;
  let endOfSemesterDate = "5-25";
  if (props.mealPlan === "175") {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function getDayOfYear(dateStr) {
      let currMonth = parseInt(dateStr.split("-")[0]);
      let currDay = parseInt(dateStr.split("-")[1]);

      while (--currMonth > 0) {
        currDay = currDay + days[currMonth - 1];
      }
      return currDay;
    }

    const currDays = getDayOfYear(date);
    const endOfSemesterDays = getDayOfYear(endOfSemesterDate);
    const averageNumOfSwipes =
      Math.round((props.swipes / (endOfSemesterDays - currDays)) * 100) / 100;
    display = (
      <>
        <Text style={styles.text}>
          With the 175 meal swipes plan, you will have{"\n\n"}
          <Text
            style={
              averageNumOfSwipes > 175 / 110
                ? { color: "#89ff4a", fontSize: 50 }
                : { color: "red", fontSize: 50 }
            }
          >
            {averageNumOfSwipes}
          </Text>
          {"\n\n"}swipes left per day.
        </Text>
        <Text style={styles.text}>
          This means you are{" "}
          {averageNumOfSwipes >= 175 / 110 ? (
            <Text style={{ color: "#89ff4a", fontWeight: "bold" }}>Over</Text>
          ) : (
            <Text style={{ color: "red", fontWeight: "bold" }}>Under</Text>
          )}{" "}
          the recommended amount of swipes
        </Text>
        <Button
          color={"gold"}
          title="Return Home"
          onPress={() => {
            props.setMealPlan(null);
            props.setSwipes(null);
          }}
        />
      </>
    );
  } else if (props.mealPlan === "14") {
    const daysUntilEndOfWeek = 7 - dayOfWeek;
    let swipesPerDay =
      Math.round((props.swipes / daysUntilEndOfWeek) * 100) / 100;
    let numOverUnder = props.swipes - 2 * daysUntilEndOfWeek;
    let overUnder;
    if (numOverUnder > 0) {
      overUnder = (
        <Text>
          with {numOverUnder} extra swipe
          {numOverUnder === 1 ? null : <Text>s</Text>}
        </Text>
      );
    } else if (numOverUnder < 0) {
      numOverUnder *= -1;
      overUnder = (
        <Text>
          since you used {numOverUnder} too many swipe
          {numOverUnder === 1 ? null : <Text>s</Text>}
        </Text>
      );
    } else {
      overUnder = null;
    }

    display = (
      <>
        <Text style={styles.text}>
          With 14 meal swipes per week, you will have{"\n\n"}
          <Text
            style={
              swipesPerDay >= 2
                ? { color: "#89ff4a", fontSize: 50 }
                : { color: "red", fontSize: 50 }
            }
          >
            {swipesPerDay}
          </Text>
          {"\n\n"}
          swipes left per day {overUnder}.
        </Text>
        <Text style={styles.text}>
          This means you are{" "}
          {swipesPerDay >= 2 ? (
            <Text style={{ color: "#89ff4a", fontWeight: "bold" }}>Over</Text>
          ) : (
            <Text style={{ color: "red", fontWeight: "bold" }}>Under</Text>
          )}{" "}
          the recommended amount of swipes
        </Text>
        <Button
          color={"gold"}
          title="Return Home"
          onPress={() => {
            props.setMealPlan(null);
            props.setSwipes(null);
          }}
        />
      </>
    );
  }
  return display;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    width: 300,
    paddingBottom: 50,
  },
});

export default DisplayRemainingSwipes;
