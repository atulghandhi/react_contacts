import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <p>
                Username: {this.props.handle}
            </p>
        );
    }
}

export default User