import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { View } from "react-native-web";

const suits = ["♦️", "♥️", "♠️", "♣️"];

const Card = ({ value, suitIndex, onPress }) => {
  const handlePress = () => {
    onPress(value);
  };
  const color = suitIndex === 0 || suitIndex === 1 ? "red" : "black";

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: "80px",
        height: "120px",
        borderRadius: "10px",
        borderWidth: 1,
        borderColor: "#000",
        margin: 4,
      }}
    >
      <View
        style={{
          with: "100%",
          flex: 1,
          alignItems: "start",
          justifyContent: "start",
          padding: 4,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: color,
          }}
        >{`${value} ${suits[suitIndex]}`}</Text>
      </View>
      <View
        style={{
          with: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: color,
          }}
        >{`${value} ${suits[suitIndex]}`}</Text>
      </View>
      <View
        style={{
          with: "100%",
          flex: 1,
          alignItems: "end",
          justifyContent: "end",
          padding: 4,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: color,
          }}
        >{`${value} ${suits[suitIndex]}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
