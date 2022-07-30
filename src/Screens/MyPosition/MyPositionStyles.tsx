import styled from "styled-components/native";
import Colors from "../../Utils/Constants/Colors";
import { Slider } from "react-native-elements";

export const MainContainer = styled.View`
  flex: 1;
`;

export const ItemsInfo = styled.View`
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 15px;
  margin-left: 80px;
  margin-right: 80px;
`;


export const TextInfoView = styled.View`
  flex-direction: row;
`;
export const TextTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;
export const TextDetail = styled.Text`
  font-size: 18px;
`;

export const StyledSlider = styled(Slider).attrs({
  trackStyle: {
    height: 10,
  },
  thumbStyle: {
    height: 20,
    width: 20,
    backgroundColor: Colors.Red,
  },
})``;

export const ContainerMap = styled.View`
  flex: 1;
  background-color: gray;
`;
