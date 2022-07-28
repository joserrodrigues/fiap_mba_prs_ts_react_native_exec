import React, {FC} from 'react';
import DetailView from './DetailView';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/RouteController";

type iProps = StackScreenProps<RootStackParamList, "Details">;

const DetailController:FC<iProps> = ({ route, navigation }) => {

    let objectItem = null;
    if (route && route.params) {
        const { item } = route.params;
        objectItem = JSON.parse(item);
    }

    return (
        <DetailView navigation={navigation} objectItem={objectItem} />
    );
};

export default DetailController;