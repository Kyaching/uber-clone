import {StyleSheet, Text} from "react-native";
import React from "react";
import MapView, {PROVIDER_DEFAULT} from "react-native-maps";

const Map = () => {
  const region = {};
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      style={styles.map}
      tintColor="black"
      showsPointsOfInterest={false}
      mapType="mutedStandard"
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      <Text>Map</Text>
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
