import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React from "react";

function SwipeInfo(props) {
  if (props.swipes) {
    return null;
  }
  const [numOfSwipes, setNumOfSwipes] = React.useState(null);

  return (
    <>
      <Text style={{ padding: "5%" }}>
        Enter the number of meal swipes you have left
      </Text>
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
        style={{ color: "black", margin: "5%" }}
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
    margin: 15,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
    width: 200,
  },
});

export default SwipeInfo;
