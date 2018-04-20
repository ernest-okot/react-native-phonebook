import React from 'react';
import ScreenContent from "components/ScreenContent";
import SearchableContactList from "components/SearchableContactList";

class List extends React.Component {

  static navigationOptions = {
    title: 'Contacts',
    headerTitle: 'Contact List'
  };

  render() {
    return <ScreenContent>
      <SearchableContactList />
    </ScreenContent>
  }
}

export default List;