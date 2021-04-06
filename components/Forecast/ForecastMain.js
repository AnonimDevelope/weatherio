import React from "react";
import { View, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../../constants/colors";
import getIcon from "../../assets/lottie/getIcon";

const ForecastMain = ({
  temperature,
  city,
  countryCode,
  status,
  iconId,
  id,
}) => {
  const icon = getIcon(iconId, id);

  return (
    <View style={styles.main}>
      <LottieView source={icon.icon} loop autoPlay style={styles.icon} />
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperature}>{temperature.toFixed(0)}</Text>
        <Text style={styles.celsius}>°c</Text>
      </View>
      <Text style={styles.location}>
        {city}, {countryCode}
      </Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  location: {
    color: colors.mainTextColor,
    fontFamily: "lexend-regular",
    fontSize: 20,
  },
  status: {
    color: colors.mainTextColor,
    fontFamily: "lexend-regular",
    fontSize: 20,
  },
  temperature: {
    color: colors.mainTextColor,
    fontSize: 60,
    fontFamily: "lexend-semi-bold",
  },
  celsius: {
    fontFamily: "lexend-light",
    fontSize: 40,
    color: colors.mainTextColor,
  },
  temperatureContainer: {
    flexDirection: "row",
  },
  main: {
    width: "100%",
    alignItems: "center",
  },
  icon: {
    height: 320,
    width: 320,
  },
});

export default ForecastMain;
