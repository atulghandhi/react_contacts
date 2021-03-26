import React, { Component } from 'react';  //would use this import if using a class component
// import React from 'react'; //would use this import if using a functional component
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class ListContacts extends Component {  //class component. Can be replaced with functional component if only using render method.

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update")
    }

    static propTypes = { //prop-types defined like so for class components.
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    }

    state={
        query:'' //everytime anything inside the state object changed, the render() method for this component is called
    }

    handleChange = (event) => {
        this.setState({query:event.target.value} )
    }

    render() {
        //destructure state and props into variable we can use
        const {query} = this.state;
        const {contacts, onDeleteContact} = this.props;

        //create a new array that will filter contacts based on user input
        const showingContacts = query === ''   //if 'query' is empty....
            ? contacts //....show all contacts (unaltered contacts array from props)
            : contacts.filter((eachContact) => ( //if 'query' not empty, then filter contacts array...
                eachContact.name.toLowerCase().includes(query.toLowerCase()) //...to show only contacts whose name includes text typed into input field
            ))

        return (
            <div className={'container-div'}>
                <div className={'search-bar'}>
                    <input
                        type="text"
                        className={'search-contacts'}
                        placeholder={'Search contacts..'}
                        value={query}
                        onChange={this.handleChange}/>

                    <Link
                        className={'add-contact'}
                        to={'/create'}>
                        Add contact
                    </Link>
                </div>

                <p className={'showing-contacts'}>
                    {`Showing ${showingContacts.length} of ${contacts.length} total `}
                </p>

                <ol className='contact-list'>
                    {showingContacts.map((contact) =>
                        <li key={contact.id} className={'contact-list-item'}>
                            <div
                                className={'contact-avatar'}
                                style={{
                                    backgroundImage:`url(${contact.avatarURL})`
                                }}
                            >
                            </div>
                            <div className={'contact-details'}>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button className={'contact-remove'} onClick={()=>onDeleteContact(contact)}>
                                Remove
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        );
    }
}

//below is how to accomplish the same thing with a functional component; i.e., a function that returns a component.
// function ListContacts(props) {
//     return( //only return, no render method
//         <ol className='contact-list'>
//             {props.contacts.map((contact) =>
//                 <li key={contact.id} className={'contact-list-item'}>
//                     <div
//                         className={'contact-avatar'}
//                         style={{
//                             backgroundImage:`url(${contact.avatarURL})`
//                         }}
//                     >
//                     </div>
//                     <div className={'contact-details'}>
//                         <p>{contact.name}</p>
//                         <p>{contact.handle}</p>
//                     </div>
//                     <button className={'contact-remove'} onClick={()=>props.onDeleteContact(contact)}>
//                         Remove
//                     </button>
//                 </li>
//             )}
//         </ol>
//     )
// }

//the above could be shortened further with an arrow function at the cost of readability

// ListContacts.propTypes = {  //define prop-types like this for functional components.
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired
// }

export default ListContacts