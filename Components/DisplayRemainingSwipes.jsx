import React from "react";
import { Text, Button } from "react-native";
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
        <Text>{`With the 175 meal swipes plan, you have ${averageNumOfSwipes} left per day`}</Text>
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
    display = (
      <>
        <Text>{`With 14 meal swipes per week, you have ${swipesPerDay} swipes left per day`}</Text>
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

export default DisplayRemainingSwipes;
