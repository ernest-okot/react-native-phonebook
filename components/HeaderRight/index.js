import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
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
        name={'ios-menu'}
        size={30}
        color={palette.textLight}
      />
    </Column>
  </TouchableOpacity>
);

export default withNavigation(HeaderRight);