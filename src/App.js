import React, { Component } from 'react';
import ListContacts from "./componants/ListContacts";

class App extends Component {
  state={
    contacts: [
      {
        "id": "rand",
        "name": "Rand al'Thor",
        "handle": "rand_althor",
        "avatarURL": "http://localhost:5001/ra.jpeg"
      },
      {
        "id": "morgase",
        "name": "Morgase Trakand",
        "handle": "morgase_trakand",
        "avatarURL": "http://localhost:5001/mt.jpg"
      },
      {
        "id": "elayne",
        "name": "Elayne Trakand",
        "handle": "elayne_trakand",
        "avatarURL": "http://localhost:5001/et.jpg"
      },
      {
        "id": "min",
        "name": "Min Farshaw",
        "handle": "elmindera_farshaw",
        "avatarURL": "http://localhost:5001/min.jpg"
      }
    ]
  }

  removeContact = (contact) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(eachContact => {
        return contact.id !== eachContact.id;
      })
    }))
  }

  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact}/>
      </div>
    );
  }
}

export default App;
