// @flow
import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Row, Column, Grow} from 'style/Flex';
import {palette} from "style";
import {withNavigation} from "react-navigation";

type Props = {
  id: string,
  firstname: string,
  lastname: string,
  title: string,
  department: string,
  avatar: string,
};

class ContactListItem extends React.PureComponent {
  props: Props;

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Profile', this.props)}>
        <Row style={{padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
          <Column>
            <View style={{backgroundColor: '#aaa', width: 54, height: 54, borderRadius: 27}}/>
          </Column>

          <Grow direction={'column'} style={{paddingLeft: 10}} justifyContent={'center'}>
            <Text style={{fontSize: 16}}>{this.props.firstname} {this.props.lastname}</Text>
            <Text style={{fontSize: 13}}>{this.props.title}</Text>
            <Text style={{fontSize: 10}}>{this.props.department}</Text>
          </Grow>

          <Column
            justifyContent={'center'}
            alignItems={'center'}>
            <Icon
              name={'chevron-right'}
              size={30}
              color={palette.primary}
            />
          </Column>
        </Row>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(ContactListItem);