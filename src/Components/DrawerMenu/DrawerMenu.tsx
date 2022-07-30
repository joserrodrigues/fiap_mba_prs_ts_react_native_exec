import React, { useLayoutEffect, FC } from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import Colors from "../../Utils/Constants/Colors";
import { RootDrawerParamList } from "../../Routes/RouteController";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const DrawerMenu: FC = () => {
  const navigation =
    useNavigation<DrawerNavigationProp<RootDrawerParamList, "Main">>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{ padding: 5 }}
        >
          <Icon
            name="bars"
            type="font-awesome"
            size={20}
            color={Colors.HeaderTintColor}
            style={{ marginLeft: 10 }}
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return null;
};

export default DrawerMenu;
