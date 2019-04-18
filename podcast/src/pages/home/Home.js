import React, {Component} from 'react';
import AppBarHome from "../../components/AppBarHome/AppBarHome";
import Login from "../login/Login";
import Registration from "../registration/Registration";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "../../components/notFound/NotFound";
import RequestRickAndMorty from "../../components/exampleApiRequest/RequestRickAndMorty";

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
        open: false,
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

    loadRegistration= () => {
       return <Registration onChange={this.handleChange}
                            form={this.state.form}>

        </Registration>
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <AppBarHome changePage={this.changePage} handleDrawerOpen={this.handleDrawerOpen}/>

                        <Switch>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/test" component={RequestRickAndMorty}/>
                            <Route exact path="/registration" component={this.loadRegistration}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Home;
