import React from "react";
import { Text } from "react-native";
function DisplayRemainingSwipes(props) {
  if (!props.swipes) {
    return null;
  }
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let date = `${month}-${day}`;
  let endOfSemesterDate = "5-25";
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
  return (
    <Text>{`With the 175 meal swipes plan, you have ${averageNumOfSwipes} left per day`}</Text>
  );
}

export default DisplayRemainingSwipes;
