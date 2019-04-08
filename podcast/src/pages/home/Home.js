import React, {Component} from 'react';
import AppBarHome from "../../components/AppBarHome/AppBarHome";
import Login from "../login/Login";
import Registration from "../registration/Registration";
import TestPage from "../testPage/TestPage";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "../../components/notFound/NotFound";
import CicleLifeComponent from "../../components/cicleLifeComponent/CicleLifeComponent";

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

    handleChange2 = e => {
        const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value;
        this.setState({
            form: {
                form: nextForm,
            },
        });
    };

    handleChange = e => {
        //this.setState({firstName: e.target.value,});
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    loadRegistration= () => {
       return <Registration onChange={this.handleChange}
                      formValues={this.state.form}>

        </Registration>
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <AppBarHome changePage={this.changePage}/>
                        <Switch>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/test" component={CicleLifeComponent}/>
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
