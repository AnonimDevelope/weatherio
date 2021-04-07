import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";
import ForecastDetails from "../components/Forecast/ForecastDetails";
import { ScrollView } from "react-native-gesture-handler";

const ForecastDetailsScreen = ({ route }) => {
  const forecast = route.params.data;
  const isDaily = route.params.daily;

  if (isDaily) {
    const sunsetDate = new Date(forecast.sunset * 1000);
    const sunset = `${sunsetDate.getHours()}:${sunsetDate.getMinutes()}`;

    const sunriseDate = new Date(forecast.sunrise * 1000);
    const sunrise = `${sunriseDate.getHours()}:${sunriseDate.getMinutes()}`;

    const date = new Date(forecast.dt * 1000);
    let month = date.getMonth();
    if (month < 10) {
      month = `0${month}`;
    }
    let day = date.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    const transformedDate = `${day}.${month}.${date.getFullYear()}`;

    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>{transformedDate}</Text>
        <ForecastDetails
          leftIconName="white-balance-sunny"
          leftLabel="Temperature (Day)"
          leftValue={forecast.temp.day}
          centerIconName="weather-night"
          centerLabel="Temperature (night)"
          centerValue={forecast.temp.night}
          rightLabel="Feels like (Day)"
          rightIconName="thermometer"
          rightValue={forecast.feels_like.day}
        />
        <ForecastDetails
          leftIconName="weather-windy"
          leftLabel="Wind Speed"
          leftValue={forecast.wind_speed}
          centerIconName="cloud-outline"
          centerLabel="Cloudiness"
          centerValue={forecast.clouds}
          rightLabel="Humidity"
          rightIconName="water-percent"
          rightValue={forecast.humidity}
        />
        <ForecastDetails
          leftIconName="weather-sunset-up"
          leftLabel="Sunrise"
          leftValue={sunrise}
          centerIconName="arrow-collapse-down"
          centerLabel="Pressure"
          centerValue={forecast.clouds}
          rightLabel="Sunset"
          rightIconName="weather-sunset-down"
          rightValue={sunset}
        />
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Status: </Text>
          <Text style={styles.text}>{forecast.weather[0].main}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Description: </Text>
          <Text style={styles.text}>{forecast.weather[0].description}</Text>
        </View>
      </ScrollView>
    );
  }

  const date = new Date(forecast.dt * 1000);
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  const transformedDate = `${day}.${month}.${date.getFullYear()} ${date.getHours()}:${minutes}`;

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{transformedDate}</Text>
      <ForecastDetails
        leftIconName="white-balance-sunny"
        leftLabel="Temperature"
        leftValue={forecast.temp}
        centerIconName="arrow-collapse-down"
        centerLabel="Pressure"
        centerValue={forecast.pressure}
        rightLabel="Feels like"
        rightIconName="thermometer"
        rightValue={forecast.feels_like}
      />
      <ForecastDetails
        leftIconName="weather-windy"
        leftLabel="Wind Speed"
        leftValue={forecast.wind_speed}
        centerIconName="cloud-outline"
        centerLabel="Cloudiness"
        centerValue={forecast.clouds}
        rightLabel="Humidity"
        rightIconName="water-percent"
        rightValue={forecast.humidity}
      />
      <View style={styles.textContainer}>
        <Text style={styles.labelText}>Status: </Text>
        <Text style={styles.text}>{forecast.weather[0].main}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.labelText}>Description: </Text>
        <Text style={styles.text}>{forecast.weather[0].description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 15,
  },
  textContainer: {
    flexDirection: "row",
  },
  labelText: {
    fontFamily: "lexend-semi-bold",
    fontSize: 20,
    color: colors.mainTextColor,
  },
  text: {
    fontFamily: "lexend-regular",
    fontSize: 20,
    color: colors.mainTextColor,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: colors.mainTextColor,
    fontFamily: "lexend-regular",
  },
});

export default ForecastDetailsScreen;