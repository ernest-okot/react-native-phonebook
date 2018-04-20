// @flow
import React from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {Text, View, StyleSheet} from "react-native";

type Props = {
  faqs: [{
    question: string,
    answer: string,
  }]
};

const renderHeader = (section, _, isActive) => (
  <View style={isActive ? style.headerActive : style.header}>
    <Text style={{fontSize: 16}}>{section.title}</Text>
  </View>
);

const renderContent = (section, _, isActive) => {
  if (!isActive) return <View/>;

  return (
    <View style={style.body}>
      <Text style={{fontSize: 13}}>{section.content}</Text>
    </View>
  );
};

const Collapsible = (props: Props) => (
  <Accordion
    initiallyActiveSection={0}
    underlayColor={'transparent'}
    sections={props.sections}
    renderHeader={renderHeader}
    renderContent={renderContent}
    easing="easeOutCubic"
  />
);

const style = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: '#eee',
    borderColor: '#ddd',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
  },
  headerActive: {
    padding: 15,
    backgroundColor: '#eee',
    borderColor: '#ddd',
    borderWidth: 1,
    margin: 10,
    marginBottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  body: {
    padding: 15,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    margin: 10,
    marginTop: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default Collapsible;