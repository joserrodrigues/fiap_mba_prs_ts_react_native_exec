import Colors from "../../Utils/Constants/Colors";
import styled from "styled-components/native";
import { Image } from "react-native-elements";

export const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledImage = styled(Image).attrs({
  containerStyle: {
    width: "100%",
    height: 190,
  },
})``;

export const TextName = styled.Text`
  margin: 10px;
  font-size: 25px;
`;

export const TextTitle = styled.Text`
  margin: 10px;
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.titleTextColor};
`;

export const TextDetail = styled.Text`
  margin: 10px;
  font-size: 13px;
`;

export const TextNoInfo = styled.Text`
  margin: 150px;
  font-size: 30px;
  color: ${Colors.titleTextColor};
  text-align: center;
`;
