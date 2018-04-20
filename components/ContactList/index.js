import React from 'react';
import {FlatList, View} from 'react-native';
import ContactListItem from "../ContactListItem";
import {Grow} from "style/Flex";

const ContactList = props => (
  <View style={{flex: 1}}>
    <FlatList
      data={props.people}
      keyExtractor={d => d.id.toString()}
      renderItem={d => <ContactListItem {...d.item}/>}
    />
  </View>
);

export default ContactList