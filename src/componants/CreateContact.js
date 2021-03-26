import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ImageInput from "../ImageInput";
import serializeForm from "form-serialize"

class CreateContact extends Component {
    handleSubmit = (e) => {
        e.preventDefault(); //will prevent default submit behavior - taking input and putting it into the url
        const userInput = serializeForm(e.target, {hash:true});

        if (this.props.onCreateContact) {
            this.props.onCreateContact(userInput)
        }
    }

    render() {
        return (
            <div>
                <Link to={'/'} className={'close-create-contact'}>
                    Back
                </Link>
                <form onSubmit={this.handleSubmit} className={'create-contact-form'}>
                    <ImageInput className={'create-contact-avatar-input'} name={'avatarURL'} maxHeight={64}/>
                    <div className={'create-contact-details'}>
                        <input type={'text'} name={'name'} placeholder={'Name'}/>
                        <input type={'text'} name={'handle'} placeholder={'Handle'}/>
                        <button>Add contact</button> {/* will submit the form, triggering form's 'onSubmit' property which will call the 'handleSubmit' method */}
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateContact