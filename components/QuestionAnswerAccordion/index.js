import React from 'react';
import {View} from "react-native";
import Collapsible from "../Collapsible";
import faqs from './faqs';

const QuestionAnswerAccordion = () => (
  <View style={{flex: 1}}>
    <Collapsible sections={faqs}/>
  </View>
);

export default QuestionAnswerAccordion;