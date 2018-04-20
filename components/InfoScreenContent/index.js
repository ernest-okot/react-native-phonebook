import React from 'react';
import {palette} from "../../style";
import ScreenContent from "../ScreenContent";
import {ScrollView, View} from "react-native";

const InfoScreenContent = props => {
  return (
    <ScreenContent>
      <ScrollView style={{display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: '#fff'}}>
        <View style={{backgroundColor: palette.secondary, height: 160}}/>
        {props.children}
      </ScrollView>
    </ScreenContent>
  );
};

export default InfoScreenContent