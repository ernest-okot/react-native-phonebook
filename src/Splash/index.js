// @flow
import React from 'react';
import {Text, StyleSheet, View} from "react-native";
import {Column, Row, Grow} from "style/Flex";
import {palette} from "style";

type Props = {
  // navigation: Navigation,
}

class Splash extends React.Component {

  props: Props;

  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('Home'), 2000);
  }

  render() {
    return <Column
      style={style.container}
      alignItems={'center'}
      justifyContent={'center'}
      grow={1}>
      <Row>
        <View style={style.logo} />
        <Column>
          <Text style={style.title}>Phonebook</Text>
          <Row style={style.sloganContainer}>
            <Text style={style.sloganText}>do more</Text>
            <Grow
              direction={'column'}
              alignItems={'center'}
              justifyContent={'center'}>
              <View style={style.sloganSeparator}/>
            </Grow>
            <Text style={style.sloganText}>be more</Text>
          </Row>
        </Column>
      </Row>

    </Column>
  }
}

const style = StyleSheet.create({
  'container': {
    backgroundColor: palette.primary,
  },
  'logo': {
    borderColor: palette.textLight,
    borderWidth: 8,
    width: 64,
    marginRight: 10
  },
  'title': {
    fontSize: 48,
    color: palette.textLight
  },
  'sloganContainer': {
    borderTopColor: palette.textLight,
    borderTopWidth: 2,
    marginTop: 5,
  },
  sloganSeparator: {
    backgroundColor: palette.accent,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  'sloganText':{
    fontSize: 28,
    color: palette.textLight
  }
});

export default Splash;