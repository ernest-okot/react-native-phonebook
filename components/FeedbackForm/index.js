import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Column, Row} from "style/Flex";
import {palette} from "style";
import {Text, TextInput, TouchableOpacity} from "react-native";

const FeedbackForm = props => (
  <Column style={{padding: 10, flex: 1}}>

    <Row style={{marginBottom: 10}}>
      <Text style={{flex: 1}}>
        Please fill in the form below or tap the call button to talk to us via our toll free helpline
      </Text>
      <Column style={{paddingLeft: 15, paddingRight: 5}} justifyContent={'center'} alignItems={'center'}>
        <Icon
          name={'call'}
          size={32}
          color={palette.primary}
        />
      </Column>
    </Row>

    <Row style={{marginBottom: 10, padding: 10, backgroundColor: '#eee'}}>
      <TextInput
        placeholder={'Your Email'}
        // onChangeText={props.onChange}
        style={{fontSize: 18, height: 24, flex: 1}}
        underlineColorAndroid="transparent"
      />
    </Row>

    <Row style={{marginBottom: 10, padding: 10, backgroundColor: '#eee'}}>
      <TextInput
        placeholder={'Your Phone Number'}
        // onChangeText={props.onChange}
        style={{fontSize: 18, height: 24, flex: 1}}
        underlineColorAndroid="transparent"
      />
    </Row>

    <Column style={{marginBottom: 10, flex: 1, padding: 10, backgroundColor: '#eee'}}>
      <TextInput
        multiline
        numberOfLines={5}
        placeholder={'Your Message'}
        // onChangeText={props.onChange}
        style={{fontSize: 18, flex: 1}}
        underlineColorAndroid="transparent"
      />
    </Column>

    <Column>
      <TouchableOpacity
        style={{
          backgroundColor: palette.secondaryDark,
          padding: 13,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 2,
        }}
        onPress={console.log}>
        <Text style={{color: palette.textLight, fontSize: 16}}>SEND</Text>
      </TouchableOpacity>
    </Column>

  </Column>
);

export default FeedbackForm