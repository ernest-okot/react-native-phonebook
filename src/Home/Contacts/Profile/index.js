import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';
import ScreenContent from "components/ScreenContent";
import {Column, Row} from "style/Flex";
import {ScrollView, Text, View, StyleSheet} from "react-native";
import {palette} from "style";
import InfoScreenContent from "../../../../components/InfoScreenContent";

class Profile extends React.Component {

  static navigationOptions = ({navigation}) => {
    const {firstname, lastname} = navigation.state.params;
    return {
      title: `${firstname} ${lastname}`,
    };
  };

  render() {
    const {firstname, lastname, title, department} = this.props.navigation.state.params;

    return <InfoScreenContent>
      <Column style={style.container} grow>

        <Row style={style.decorated}>
          <Column style={style.group} grow>
            <Text style={style.title}>{`${firstname} ${lastname}`}</Text>
            <Text style={style.subTitle}>{title}</Text>
          </Column>

          <Column style={style.icon} justifyContent={'center'} alignItems={'center'}>
            <Icon
              name={'call'}
              size={32}
              color={palette.primary}
            />
          </Column>
        </Row>

        <Row style={style.decorated}>
          <Column grow>
            <View style={style.group}>
              <Text style={style.heading}>OFFICE LINE</Text>
              <Text>+256412456767</Text>
            </View>

            <View style={style.group}>
              <Text style={style.heading}>OFFICE LINE CODE</Text>
              <Text>978</Text>
            </View>
          </Column>

          <Column style={style.icon} justifyContent={'center'} alignItems={'center'}>
            <Icon
              name={'call'}
              size={32}
              color={palette.primary}
            />
          </Column>
        </Row>


        <Row style={style.decorated}>
          <Column style={style.group} grow>
            <Text style={style.heading}>EMAIL</Text>
            <Text>{`${firstname}${lastname}`.toLocaleLowerCase()}@yourcompany.com</Text>
          </Column>

          <Column style={style.icon} justifyContent={'center'} alignItems={'center'}>
            <Icon
              name={'email'}
              size={32}
              color={palette.primary}
            />
          </Column>
        </Row>


        <Row style={style.decorated}>
          <Column style={style.group} grow>
            <Text style={style.heading}>DUTY STATION</Text>
            <Text>Nakawa Business Park, Block D, 3rd Floor</Text>
          </Column>


          <Column style={style.icon} justifyContent={'center'} alignItems={'center'}>
            <Icon
              name={'pin-drop'}
              size={32}
              color={palette.primary}
            />
          </Column>
        </Row>


        <Column style={style.group}>
          <Text style={style.heading}>DIRECTORATE</Text>
          <Text>Special Operations</Text>
        </Column>


        <Column style={style.group}>
          <Text style={style.heading}>DEPARTMENT/TEAM</Text>
          <Text>{department}</Text>
        </Column>

        <Column style={style.group}>
          <Text style={style.heading}>TAGS</Text>
          <Text>Processes, Procurement, Process, Re-engineering, Business Process, Payment Processes, TMT, SMT</Text>
        </Column>

      </Column>
    </InfoScreenContent>
  }
}

const style = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 80,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 13
  },
  icon: {
    paddingLeft: 15,
    paddingRight: 5
  },
  group: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  decorated: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  heading: {
    fontSize: 13,
    fontWeight: '500',
  },

});

export default Profile;