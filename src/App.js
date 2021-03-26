import React, { Component } from 'react';
import ListContacts from "./componants/ListContacts";
import CreateContact from "./componants/CreateContact";
import * as ContactsAPI from './utils/ContactsAPI';
import {Route} from 'react-router-dom';

class App extends Component {
  state={
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll()
        .then((contacts) => {
          this.setState(() => ({
            contacts
          }))
        })
  }

    removeContact = (contact) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(eachContact => {
                return contact.id !== eachContact.id;
            })
        }))
        ContactsAPI.remove(contact);
    }

    createContact = (contact) => {
        ContactsAPI.create(contact)
            .then( (contact) => {
                this.setState((prevState)=>{
                    contacts: prevState.contacts.concat([contact]);
                })
            });
    }

  render() {
    return (
      <div>

        <Route exact path={'/'} render={()=>(
          <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact}/>
        )}/>

        <Route path='/create' render={({history}) => (
          <CreateContact onCreateContact={(contact) => {
                  this.createContact(contact)
                  history.push('/') //will reroute user back to original page
          }} />
        )} />

      </div>
    );
  }
}

export default App;
