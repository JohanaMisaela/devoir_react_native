import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Card from "./components/Card";

const initialValues = [
  { value: "7", suitIndex: 0 },
  { value: "8", suitIndex: 0 },
  { value: "9", suitIndex: 0 },
  { value: "A", suitIndex: 0 },
  { value: "10", suitIndex: 0 },
  { value: "K", suitIndex: 0 },
  { value: "Q", suitIndex: 0 },
  { value: "J", suitIndex: 0 },
];

const nextValue = (value) => {
  const order = ["7", "8", "9", "10", "J", "Q", "K", "A"];
  const index = order.findIndex((item) => item === value);
  return order[(index + 1) % order.length];
};

const App = () => {
  const [cards, setCards] = useState(initialValues);

  const updateSuit = (index) => {
    setCards(
      cards.map((card, i) => {
        if (i === index) {
          return { ...card, suitIndex: (card.suitIndex + 1) % 4 };
        }
        return card;
      })
    );
  };

  const updateValues = () => {
    setCards(
      cards.map((card) => ({
        ...card,
        value: nextValue(card.value),
      }))
    );
  };

  const renderCard = (index) => {
    if (index === 4) {
      return (
        <TouchableOpacity
          key="center"
          style={styles.cardPlaceholder}
          onPress={updateValues}
        ></TouchableOpacity>
      );
    }
    const card = cards[index < 4 ? index : index - 1];
    return (
      <Card
        key={`card-${index}`}
        value={card.value}
        suitIndex={card.suitIndex}
        onPress={() => updateSuit(index < 4 ? index : index - 1)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {renderCard(0)}
        {renderCard(1)}
        {renderCard(2)}
      </View>
      <View style={styles.row}>
        {renderCard(3)}
        {renderCard(4)}
        {renderCard(5)}
      </View>
      <View style={styles.row}>
        {renderCard(6)}
        {renderCard(7)}
        {renderCard(8)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  cardPlaceholder: {
    width: "80px",
    height: "120px",
    borderRadius: "10px",
    borderWidth: 1,
    borderColor: "#000",
    margin: 4,
  },
  card: {
    height: 150,
    width: 100,
  },
});

export default App;
