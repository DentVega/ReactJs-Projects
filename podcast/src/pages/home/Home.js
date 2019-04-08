import React, {Component} from 'react';
import AppBarHome from "../../components/AppBarHome/AppBarHome";
import Login from "../login/Login";
import Registration from "../registration/Registration";
import TestPage from "../testPage/TestPage";

class Home extends Component {

    state = {
        homeState: {
            page: "registration",
        },
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        },
    };

    changePage = (string) => {
        this.setState({
            homeState: {
                page: string,
            }
        })
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        return (
            <div>
                <AppBarHome changePage={this.changePage}/>
                {
                    this.state.homeState.page === "login" ?
                        <Login/> :
                        this.state.homeState.page === "registration" ?
                            <Registration
                                onChange={this.handleChange}
                                formValues={this.state.form}/> :
                            <TestPage/>
                }
            </div>
        );
    }
}

export default Home;
