import React from 'react'
import Icon from "@expo/vector-icons/MaterialIcons";
import {palette} from "style";
import {Column} from "style/Flex";
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from "react-native";

const HeaderRight = props => (
  <TouchableOpacity
    onPress={() => props.navigation.navigate('DrawerToggle')}>
    <Column
      style={{padding: 15}}
      justifyRight={'center'}
      alignItems={'center'}>
      <Icon
        name={'menu'}
        size={30}
        color={palette.textLight}
      />
    </Column>
  </TouchableOpacity>
);

export default withNavigation(HeaderRight);