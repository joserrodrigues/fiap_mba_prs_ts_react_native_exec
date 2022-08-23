import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Constants/Colors';

import styled from "styled-components/native";

export const BoxUserInfo = styled.View`
        height: 120px;
        flex-direction: column;        
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
`;

export const IconView = styled.View`
        width: 70px;
        height: 70px;
        background-color: ${Colors.White};
        margin: 15px;
        border-radius: 35px;
        justify-content: center;
        align-items: center;
`;
export const IconText = styled.Text`
        font-size: 30px;
        color: ${Colors.Black};
`;
export const WelcomeText = styled.Text`
        font-size: 18px;
        color: ${Colors.White};
`;

