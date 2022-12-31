import React from "react";
import { Text } from "react-native";
function DisplayRemainingSwipes(props) {
  const swipes = props.swipes;
  return <Text>{swipes}</Text>;
}

export default DisplayRemainingSwipes;
