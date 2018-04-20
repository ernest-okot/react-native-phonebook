// @flow
import React from 'react';
import {TextInput} from 'react-native';
import {Row, Grow, Column} from "style/Flex";
import Icon from '@expo/vector-icons/MaterialIcons';
import {palette} from "style";

type Props = {
  onChange: string => null
};

const Search = (props: Props) => (
  <Column style={{padding: 10, borderBottomColor: '#eee', borderBottomWidth: 1}}>
    <Row style={{backgroundColor: '#eee'}}>
      <Grow style={{padding: 10}} direction={'row'} alignItems={'center'}>
        <TextInput
          placeholder={'Search'}
          onChangeText={props.onChange}
          style={{fontSize: 18, flex: 1}}
          underlineColorAndroid="transparent"
        />
      </Grow>
      <Column
        style={{paddingRight: 15}}
        justifyContent={'center'}
        alignItems={'center'}>
        <Icon
          name={'search'}
          size={28}
          color={palette.secondaryDark}
        />
      </Column>
    </Row>
  </Column>
);

export default Search