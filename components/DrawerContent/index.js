import React from 'react';
import {ScrollView} from "react-native";
import {DrawerItems, SafeAreaView} from "react-navigation";
import Icon from '@expo/vector-icons/MaterialIcons';
import {palette} from "style";
import {Row} from "style/Flex";
import {routes} from "src/Home";
import HeaderRight from "../HeaderRight";

const DrawerIcon = ({route: {key}, focused = false, tintColor = palette.textLight}) => {
  return <Icon name={routes[key].icon} size={24} color={tintColor}/>;
};

const DrawerContent = props => {
  return <ScrollView style={{backgroundColor: palette.secondary}}>
    <SafeAreaView
      style={{flex: 1}}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <Row justifyContent={'flex-end'}>
        <HeaderRight/>
      </Row>
      <DrawerItems
        {...props}
        activeTintColor={palette.textLight}
        inactiveTintColor={palette.textLight}
        activeBackgroundColor={palette.secondaryDark}
        renderIcon={DrawerIcon}
      />
    </SafeAreaView>
  </ScrollView>
};

export default DrawerContent;