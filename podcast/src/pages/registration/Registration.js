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

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <ProfilePreview
                            firstName={this.props.formValues.firstName}
                            lastName={this.props.formValues.lastName}
                            twitter={this.props.formValues.twitter}
                            jobTitle={this.props.formValues.jobTitle}
                            email={this.props.formValues.email}/>
                    </Grid>
                    <Grid item xs={6}>
                        <RegistrationForm
                            onChange={this.props.onChange}
                            formValues={this.props.formValues}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Registration);
