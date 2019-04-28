import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import ProfilePreview from "../../components/profilePreview/ProfilePreview";

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

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                firstName: null,
                lastName: null,
                twitter: null,
                jobTitle: null,
                email: null,
            },
        }
    }

    // noinspection JSUnusedGlobalSymbols
    handleChange2 = e => {
        const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value;
        this.setState({
            form: nextForm,
        })
    };

    handleChange = e => {
        console.log('handleChange');
        console.log(e.target);
        this.setState({
            ...this.state.form,
            [e.target.name]: e.target.value,
        })
    };


    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <ProfilePreview
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            twitter={this.state.form.twitter}
                            jobTitle={this.state.form.jobTitle}
                            email={this.state.form.email}/>
                    </Grid>
                    <Grid item xs={6}>
                        <RegistrationForm
                            onChange={this.handleChange}
                            form={this.state.form}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Registration);
