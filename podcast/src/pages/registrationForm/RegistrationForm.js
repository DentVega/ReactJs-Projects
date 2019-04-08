import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class RegistrationForm extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <h1> Formulario de Registro </h1>
                <form className={classes.container} noValidate autoComplete="off">
                    <div className={"form-group"}>
                        <input

                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(RegistrationForm);
