import React, {Component} from 'react';

class ProfilePreview extends Component {
    render() {
        return (
            <div>
                {this.props.firstName}
            </div>
        );
    }
}

export default ProfilePreview;
