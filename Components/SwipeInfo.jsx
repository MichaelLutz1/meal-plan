import { StyleSheet, Text, TextInput, Button } from "react-native";
import React from "react";

function SwipeInfo(props) {
  if (props.swipes) {
    return null;
  }
  const [numOfSwipes, setNumOfSwipes] = React.useState(null);

  return (
    <>
      <Text style={{ color: "gold", fontSize: 25, fontWeight: "bold" }}>
        Blue Hen Meal Counter
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your remaining meal swipes "
        placeholderTextColor={"black"}
        maxLength={3}
        value={numOfSwipes}
        onChangeText={(val) => setNumOfSwipes(val)}
        keyboardType="numeric"
      />
      <Button
        color={"gold"}
        title="Submit"
        onPress={() => {
          props.setSwipes(numOfSwipes);
        }}
      ></Button>
    </>
  );
}
// const calculateSwipes = (swipes) => {
//   console.log(swipes);
// };
const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 18,
    borderColor: "black",
    backgroundColor: "cream",
    borderWidth: 1,
    borderRadius: 10,
    width: 250,
  },
});

export default SwipeInfo;
