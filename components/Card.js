import React from "react";
import { TouchableOpacity, Text } from "react-native";

const suits = ["♦️", "♥️", "♠️", "♣️"];

const Card = ({ value, suitIndex, onPress }) => {
  const handlePress = () => {
    onPress(value);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center",
      }}
    >
      <Text>{`${value} ${suits[suitIndex]}`}</Text>
    </TouchableOpacity>
  );
};

export default Card;
