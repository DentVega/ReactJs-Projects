import React, {Component} from 'react';
import {withRouter} from 'react-router';
import Button from "@material-ui/core/es/Button";

class SessionButtons extends Component {

    login = () => {
        this.props.history.push('/login')
    };

    registration = () => {
        this.props.history.push("/registration")
    };

    render() {
        return (
            <div>
                <Button color={"inherit"} onClick={this.login}>Iniciar sesion</Button>
                <Button color={"inherit"} onClick={this.registration}>Registrarse</Button>
            </div>
        );
    }
}

export default withRouter(SessionButtons);
