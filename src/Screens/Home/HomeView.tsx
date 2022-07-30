import React, { FC } from 'react';
import {
  FlatList,
  View,
  RefreshControl,
} from "react-native";
import Colors from '../../Utils/Constants/Colors';

import {
  MainSafeAreaView,
  LoadingBox,
  ContainerItem,
  TextsView,
  TextNameStyle,
  TextTitle,
  TextDetail,
  StyledImage,
  SeparatorStyled,
  StyledSearchBar,
} from "./HomeStyles";
import IPerson from '../../Interfaces/IPerson';
import DrawerMenu from '../../Components/DrawerMenu/DrawerMenu';

type IProps = {
  dataConnectionFiltered: IPerson[];
  isLoading: boolean;
  goToDetail: (item: IPerson) => void;
  searchText: string;
  onSearchUpdate: (text: string) => void;
  onRefresh: () => void;
};
const HomeView:FC<IProps> = ({ dataConnectionFiltered, isLoading, goToDetail, searchText, onSearchUpdate, onRefresh }) => {

    const RenderItem = ({ item }: {item: IPerson}) => {

        return (
          <ContainerItem onPress={() => goToDetail(item)}>
            <>
              <TextsView>
                <View>
                  <StyledImage
                    source={{ uri: item.image }}
                  />
                </View>
                <View>
                  <TextNameStyle>
                    <TextTitle>
                      {item.firstName} {item.lastName}
                    </TextTitle>
                  </TextNameStyle>
                  <TextNameStyle>
                    <TextDetail>
                      {item.address} - {item.state} - {item.zipCode}
                    </TextDetail>
                  </TextNameStyle>
                  <TextNameStyle>
                    <TextDetail>{item.jobTitle}</TextDetail>
                  </TextNameStyle>
                </View>
              </TextsView>
              <SeparatorStyled />
            </>
          </ContainerItem>
        );
    }

    let loadingBox = null
    if (isLoading) {
        loadingBox = (
          <LoadingBox
            size="large"
            color={Colors.activityColor}
          />
        );
    }
    return (
      <MainSafeAreaView>
        <DrawerMenu />
        <StyledSearchBar
          placeholder="Digite Aqui..."
          //   onChangeText={() => onSearchUpdate("value")}
          value={searchText}
          platform="default"
          onChangeText={(text: string) => onSearchUpdate(text)}
        />
        {loadingBox}
        <FlatList
          data={dataConnectionFiltered}
          renderItem={({ item }: { item: IPerson }) => (
            <RenderItem item={item} />
          )}
          keyExtractor={(item) => item.CPF.toString()}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={onRefresh} />
          }
        />
      </MainSafeAreaView>
    );
};

export default HomeView;