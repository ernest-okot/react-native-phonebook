// @flow
import React from 'react';
import {Grow} from 'style/Flex';
import Search from '../Search';
import ContactList from "../ContactList";
import people from './people'

type State = {
  searchTerm: string,
  people: Contact[]
}

type Contact = {
  firstname: string,
  lastname: string,
  title: string,
  department: string,
  avatar?: string,
}

class SearchableContactList extends React.Component {
  state: State;

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      people,
    }
  }

  handleSearch = searchTerm => {
    this.setState({
      searchTerm,
      people: people.filter((person: Contact) => {
        const {firstname, lastname, title, department} = person;
        return (`${firstname} ${lastname} ${title} ${department}`).match(searchTerm);
      })
    })
  };

  render() {
    return (
      <Grow direction={'column'}>
        <Search onChange={this.handleSearch}/>
        <ContactList people={this.state.people}/>
      </Grow>
    );
  }
}

export default SearchableContactList;