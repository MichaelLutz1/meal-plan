import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React from "react";

function SwipeInfo(props) {
  const [numOfSwipes, setNumOfSwipes] = React.useState(null);

  return (
    <>
      <Text>Enter the number of meal swipes you have left</Text>
      <TextInput
        style={styles.input}
        placeholder="###"
        maxLength={3}
        value={numOfSwipes}
        onChangeText={(val) => setNumOfSwipes(val)}
        keyboardType="numeric"
      />
      <Button
        title="Submit"
        style={{ color: "black" }}
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
    padding: 8,
    margin: 4,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
    width: 200,
  },
});

export default SwipeInfo;
