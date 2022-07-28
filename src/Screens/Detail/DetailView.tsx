import React, { FC } from 'react';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/RouteController";
import { ScrollView } from 'react-native';
import {
  MainContainer,
  StyledImage,
  TextName,
  TextTitle,
  TextDetail,
  TextNoInfo,
} from "./DetailStyles";
import IPerson from '../../Interfaces/IPerson';


type IProps = {
  navigation: StackNavigationProp<RootStackParamList, "Details">;
  objectItem: IPerson | null;
};

const DetailView:FC<IProps> = ({ navigation, objectItem }) => {

    if (!objectItem) {
        return (
            <>
                <TextNoInfo >
                    Sem informações
                </TextNoInfo>
            </>
        );
    }
    return (
      <MainContainer>
        <ScrollView>
          <StyledImage
            source={{ uri: objectItem.image }}
          />
          <TextName>
            {objectItem.firstName} {objectItem.lastName}
          </TextName>
          <TextTitle>Ocupação</TextTitle>
          <TextDetail>{objectItem.jobTitle}</TextDetail>
          <TextTitle>Tipo</TextTitle>
          <TextDetail>
            {objectItem.jobType} / {objectItem.jobArea}
          </TextDetail>
          <TextTitle>Endereço</TextTitle>
          <TextDetail>{objectItem.address}</TextDetail>
          <TextDetail>{objectItem.zipCode}</TextDetail>
          <TextDetail>
            {objectItem.city} / {objectItem.state} / {objectItem.coutry}
          </TextDetail>
          <TextTitle>Telefone</TextTitle>
          <TextDetail>{objectItem.phone}</TextDetail>
        </ScrollView>
      </MainContainer>
    );
};


export default DetailView;