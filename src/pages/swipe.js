import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CardStack, { Card } from 'react-native-card-stack-swiper';

export default class Teste extends Component {

  render() {
    const cards = [];
    for (let index = 0; index < 10; index++) {
      if( ( (index+1) % 2) == 0){
        cards.push(
          <Card key={index} style={[styles.card, styles.card2]}><Text style={styles.label}>{index}</Text></Card>
        )
      }else {
        cards.push(
          <Card key={index} style={[styles.card, styles.card1]}><Text style={styles.label}>{index}</Text></Card>
        )
      }
    }
    return (
      <View style={styles.container}>
        <CardStack style={styles.content} ref={swiper => { this.swiper = swiper }}>
          {cards}
        </CardStack>

        <View style={styles.butonRow}>
          <TouchableOpacity style={styles.button} onPress={() => { this.swiper.swipeLeft() }}>
            <Text style={styles.buttonText}>Left</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => { this.swiper.swipeRight() }}>
            <Text style={styles.buttonText}>Right</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  card: {
    width: 260,
    height: 470,
    alignItems: "center",
    borderRadius: 6
  },
  card1: {
    backgroundColor: "#ffa500",
  },
  card2: {
    backgroundColor: "#084d6e",
  },
  label: {
    padding: 30,
    fontSize: 62,
    fontWeight: "bold",
    color: "#fff"
  },
  button: {
    height: 40,
    width: '40%',
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#4BB0EE",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  },
  butonRow: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

});