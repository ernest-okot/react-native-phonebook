import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';
import {Grow, Row, Column} from "style/Flex";
import {palette} from "style";
import {Text, TextInput, Button, TouchableOpacity} from "react-native";

const WhistleBlowerForm = props => {
  return (
    <Grow direction={'column'} style={{padding: 10, backgroundColor: '#fff'}}>

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
          placeholder={'Subject'}
          // onChangeText={props.onChange}
          style={{fontSize: 18, height: 24, flex: 1}}
          underlineColorAndroid="transparent"
        />
      </Row>

      <Grow direction={'column'} style={{marginBottom: 10, padding: 10, backgroundColor: '#eee'}}>
        <TextInput
          multiline
          numberOfLines={5}
          placeholder={'Details'}
          // onChangeText={props.onChange}
          style={{fontSize: 18, flex: 1}}
          underlineColorAndroid="transparent"
        />
      </Grow>

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
          <Text style={{color: palette.textLight, fontSize: 16}}>REPORT</Text>
        </TouchableOpacity>
      </Column>

    </Grow>
  );
};

export default WhistleBlowerForm