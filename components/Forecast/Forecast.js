import React, { memo } from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import ForecastItem from "./ForecastItem";

const Forecast = ({ forecast, daily, navigation }) => {
  return (
    <View style={styles.main}>
      {daily ? (
        <FlatList
          data={forecast}
          initialNumToRender={(
            Dimensions.get("screen").width / 110 +
            1
          ).toFixed(0)}
          keyExtractor={(item) => `${item.dt}`}
          renderItem={(itemData) => (
            <ForecastItem
              timestamp={itemData.item.dt}
              temperature={itemData.item.temp.day}
              status={itemData.item.weather[0].main}
              daily={daily}
              iconId={itemData.item.weather[0].icon}
              id={itemData.item.weather[0].id}
              onPress={() =>
                navigation.navigate("Details", {
                  data: itemData.item,
                  daily: true,
                })
              }
            />
          )}
          horizontal
        />
      ) : (
        <FlatList
          data={forecast}
          keyExtractor={(item) => `${item.dt}`}
          initialNumToRender={(
            Dimensions.get("screen").width / 110 +
            1
          ).toFixed(0)}
          updateCellsBatchingPeriod={100}
          windowSize={11}
          renderItem={(itemData) => (
            <ForecastItem
              timestamp={itemData.item.dt}
              temperature={itemData.item.temp}
              status={itemData.item.weather[0].main}
              daily={daily}
              iconId={itemData.item.weather[0].icon}
              id={itemData.item.weather[0].id}
              onPress={() =>
                navigation.navigate("Details", {
                  data: itemData.item,
                  daily: false,
                })
              }
            />
          )}
          horizontal
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    maxHeight: 130,
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 10,
    overflow: "hidden",
  },
});

export default memo(Forecast);
