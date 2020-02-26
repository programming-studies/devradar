import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";
import { addListener } from "expo/build/Updates/Updates";

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      // Pede permissão para pegar localização
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          // Localização por gps
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          // Cálculo navais para zoom no mapa
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }
    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView style={styles.map} initialRegion={currentRegion}>
      <Marker coordinate={{ latitude: -7.0996074, longitude: -34.8392131 }}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://avatars0.githubusercontent.com/u/5747855?s=60&v=4"
          }}
        />
        <Callout
          onPress={() => {
            navigation.navigate("Profile", {
              github_username: "mikhailcavalcanti"
            });
          }}
        >
          <View style={styles.callout}>
            <Text style={styles.devName}>Mikhail Cavalcanti</Text>
            <Text style={styles.devBio}>
              Programador entusiasta de novas tecnologias
            </Text>
            <Text style={styles.devTechs}>
              Node Js, React Native, React, Php
            </Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: { flex: 1 },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "#fff"
  },
  callout: {
    width: 260
  },
  devName: {
    fontWeight: "bold",
    fontSize: 16
  },
  devBio: {
    color: "#666",
    marginTop: 5
  },
  devTechs: {
    marginTop: 4
  }
});

export default Main;
