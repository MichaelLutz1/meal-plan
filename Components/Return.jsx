import { Button } from "react-native";
import React from "react";

function Return(props) {
  if (!props.swipes) {
    return null;
  }
  console.log("rendered");
  return (
    <Button
      color={"gold"}
      title="Return Home"
      onPress={() => props.setSwipes(null)}
    />
  );
}

export default Return;
