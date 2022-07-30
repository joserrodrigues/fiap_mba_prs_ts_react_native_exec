import React, { FC } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Colors from '../../Utils/Constants/Colors';
import {
  ContainerMap,
  MainContainer,
  ItemsInfo, 
  StyledSlider,
  TextDetail,
  TextInfoView,
  TextTitle,
} from "./MyPositionStyles";
import DrawerMenu from '../../Components/DrawerMenu/DrawerMenu';
import MapView, { Marker, Circle, LatLng } from 'react-native-maps';

type IProps = {
  position: LatLng;
  statusPosition: number;
  radius: number;
  regionDelta: number;
  onChangeRadius: (newRadius: number) => void;
  updatePosition: (coords: LatLng) => void;
};

const MyPositionView:FC<IProps> = ({
  position,
  statusPosition,
  radius,
  regionDelta,
  onChangeRadius,
  updatePosition,
}) => {
  let infoBox = null;

  //Organiza o texto se está buscando
  if (statusPosition === 1) {
    infoBox = <ActivityIndicator size="large" color={Colors.Red} />;
  } else if (statusPosition === 2) {
    let info = "";
    if (position) {
      info =
        "Latitude = " +
        position.latitude +
        " - Longitude = " +
        position.longitude
    }
    infoBox = (
      <>
        <ItemsInfo>
          <TextInfoView>
            <TextTitle>Distância: </TextTitle>
            <TextDetail>{radius} mts.</TextDetail>
          </TextInfoView>
          <StyledSlider
            value={radius}
            onValueChange={onChangeRadius}
            maximumValue={5000}
            minimumValue={100}
            step={100}
            allowTouchTrack
          />
        </ItemsInfo>
        <ContainerMap>
          <MapView
            style={{ flex: 1 }}
            region={{
              latitude: position.latitude,
              longitude: position.longitude,
              latitudeDelta: regionDelta,
              longitudeDelta: regionDelta,
            }}
            mapType={"satellite"}
          >
            <Circle
              center={{
                latitude: position.latitude,
                longitude: position.longitude,
              }}
              radius={radius}
              fillColor={Colors.RedTransparent}
              strokeColor={Colors.Red}
            />
            <Marker
              draggable
              coordinate={{
                latitude: position.latitude,
                longitude: position.longitude,
              }}
              title={"Posição Atual"}
              description={"Descrição da Posição"}
              onDragEnd={(e) => updatePosition(e.nativeEvent.coordinate)}
            />
          </MapView>
        </ContainerMap>
      </>
    );
  } else {
    let info = "";
    if (position) {
      info =
        "Latitude = " +
        position.latitude +
        " - Longitude = " +
        position.longitude;
    }    
    infoBox = (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 25, color: "red" }}>{info}</Text>
      </View>
    );
  }

  return (
    <MainContainer>
      <DrawerMenu />
      {infoBox}
    </MainContainer>
  );
};

export default MyPositionView;