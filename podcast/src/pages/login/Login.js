import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";
import Grid from "@material-ui/core/Grid";

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
    button: {
        margin: theme.spacing.unit,
    },
    badge: {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.10)",
        borderRadius: "8px 8px 8px 8px",
        height: "382px",
        overflow: "hidden",
    },
    badge_section_name: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 0",
    },
});

class Login extends Component {

    state = {
        showPassword: false,
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <h1>Inicio de Session</h1>

                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="filled-email-input"
                                label="Email"
                                className={classes.textField}
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="filled"
                                fullWidth
                            />

                            <TextField
                                id="filled-password-input"
                                label="Password"
                                className={classes.textField}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="filled"
                                fullWidth
                            />

                            <Button variant="contained" color="primary" className={classes.button}>
                                Iniciar sesion
                            </Button>
                        </form>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default withStyles(styles)(Login);
