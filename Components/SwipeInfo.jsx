import { StyleSheet, Text, TextInput, Button } from "react-native";
import React from "react";

function SwipeInfo(props) {
  if (props.swipes) {
    return null;
  }
  const [numOfSwipes, setNumOfSwipes] = React.useState(null);

  return (
    <>
      <Text style={{ color: "#ffe01c", fontSize: 25, fontWeight: "bold" }}>
        Udel Meal Counter
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your remaining meal swipes "
        placeholderTextColor={"black"}
        maxLength={3}
        value={numOfSwipes}
        onChangeText={(val) => setNumOfSwipes(val)}
        keyboardType="numeric"
        backgroundColor="beige"
      />
      <Button
        color={"#ffe01c"}
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
    borderColor: "grey",
    backgroundColor: "cream",
    borderWidth: 1,
    borderRadius: 10,
    width: 240,
  },
});

export default SwipeInfo;
