import { Button } from "react-native";
import React from "react";

function Return(props) {
  console.log("rendered");
  return <Button title="Return" onPress={() => props.setSwipes(null)} />;
}

export default Return;
