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

    handleClick = () => {
        console.log('Button was clicked');
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <h1> Formulario de Registro </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.props.form.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.props.form.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.props.form.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.props.form.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.props.form.twitter}
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(RegistrationForm);
