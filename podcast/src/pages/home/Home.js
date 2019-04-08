import React, {Component} from 'react';
import AppBarHome from "../../components/AppBarHome/AppBarHome";
import Login from "../login/Login";
import RegistrationForm from "../registrationForm/RegistrationForm";
import TestPage from "../testPage/TestPage";

class Home extends Component {

    state = {
        homeState: {
            page: "registration",
        },
    };

    changePage = (string) => {
        this.setState({
            homeState: {
                page: string,
            }
        })
    };

    render() {
        return (
            <div>
                <AppBarHome changePage={this.changePage}/>
                {
                    this.state.homeState.page === "login" ?
                        <Login/> :
                        this.state.homeState.page === "registration" ?
                            <RegistrationForm/> :
                            <TestPage/>
                }
            </div>
        );
    }
}

export default Home;
