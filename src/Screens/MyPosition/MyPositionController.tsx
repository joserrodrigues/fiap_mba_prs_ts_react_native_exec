import React, { FC, useState, useEffect } from "react";
import * as Location from "expo-location";
import MyPositionView from "./MyPositionView";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/RouteController";
import { LatLng } from "react-native-maps";
import { LocationObject } from "expo-location";

type iProps = StackScreenProps<RootStackParamList, "MyPosition">;

const MyPositionController: FC<iProps> = ({ navigation }) => {
  //Criando os states para buscar a informação
  const [position, setPosition] = useState<LatLng>({
    latitude: 0,
    longitude: 0,
  });
  const [statusPosition, setStatusPosition] = useState<number>(1);
  const [radius, setRadius] = useState<number>(100);
  const [regionDelta, setRegionDelta] = useState<number>(0.0022);

  useEffect(() => {
    startGetGeoLocation();
  }, []);

  const startGetGeoLocation = () => {
    setStatusPosition(1);
    setTimeout(async () => {
      //Verifica se o usuário já deu a permissão e, caso não tenha, solicita a permissão
      let { status } = await Location.requestForegroundPermissionsAsync();
      //Retorna o erro
      if (status !== "granted") {
        setStatusPosition(-1);
        return;
      }

      let currentPosition: LocationObject | null;
      currentPosition = await Location.getCurrentPositionAsync({});
      //Com o permissão em ordem, busca a posição do usuário assincronamente
      setPosition({
        latitude: currentPosition?.coords.latitude ?? 0,
        longitude: currentPosition?.coords.longitude ?? 0,
      });
      setStatusPosition(2);
    }, 1000);
  };

  const onChangeRadius = (newRadius: number) => {
    let delta = ((newRadius / 100) * 0.097) / 50;
    console.log(" Delta = " + delta + " - New Radius = " + newRadius);
    setRadius(newRadius);
    setRegionDelta(delta);
  };

  const updatePosition = (coords: LatLng) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });

    // setPosition(coords)
    console.log(coords);
  };

  //Mostra o status/resultado na tela
  return (
    <MyPositionView
      position={position}
      radius={radius}
      regionDelta={regionDelta}
      statusPosition={statusPosition}
      onChangeRadius={onChangeRadius}
      updatePosition={updatePosition}
    />
  );
};

export default MyPositionController;
