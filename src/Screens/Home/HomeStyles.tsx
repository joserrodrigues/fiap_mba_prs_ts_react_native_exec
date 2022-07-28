import Colors from '../../Utils/Constants/Colors';
import styled from "styled-components/native";
import { Image, SearchBar } from "react-native-elements";


export const MainSafeAreaView = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;


export const LoadingBox = styled.ActivityIndicator`
  margin-top: 30px;
`;

export const ContainerItem = styled.TouchableOpacity`
  margin-bottom: 10px;
`;

export const TextsView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 2px;
`;

export const TextNameStyle = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const TextTitle = styled.Text`
  font-size: 18px;
`;

export const TextDetail = styled.Text`
  font-size: 12px;
`;

export const StyledImage = styled(Image).attrs({
  containerStyle: {
    width: 50,
    height: 50,
    margin: 10,
  },
})``;


export const SeparatorStyled = styled.View`
    flex: 1;
    height: 2px;
    background-color: ${Colors.separatorColor};
    margin-left: 10px;
    margin-right: 10px;
`;

export const StyledSearchBar = styled(SearchBar).attrs({
  containerStyle: {
    backgroundColor: Colors.White,
    marginBottom: 10,
  },
  inputContainerStyle: {
    backgroundColor: Colors.LightGrey,
    borderRadius: 20,
  },
})``;
