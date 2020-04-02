import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#A7BFE8", "#3a6073"],
    title: "Haze",
    subtitle: "Hazy day, let's get some Hazelnut coffee!☕"
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm",
    subtitle: "😬😖🌪🌩"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#348AC7", "#A7BFE8"],
    title: "Drizzle",
    subtitle: "Be careful driving!"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Rainy",
    subtitle: "I'm singing~ in the rain~ ☂"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snowy",
    subtitle: "Do you wanna build a snowman? ☃"
  },
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["#636FA4", "#F3904F"],
    title: "Atmosphere",
    subtitle: "Air is stuffy"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Clear Day!",
    subtitle: "Cool! Go out and enjoy nature!"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "cloudy",
    subtitle: "Hope it will be sunny soon!!!😝"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#acb6e5", "#bdc3c7"],
    title: "Misty",
    subtitle: "🌫"
  },
  Dust: {
    iconName: "factory",
    gradient: ["#BA8B02", "#D3CBB8"],
    title: "Dusty day!!",
    subtitle: "Don't go outside😨"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={90}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 40,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
