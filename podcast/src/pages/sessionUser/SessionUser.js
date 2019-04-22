import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Login from "../login/Login";
import Registration from "../registration/Registration";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import SessionButtons from "./components/SessionButtons";

class SessionUser extends Component {

    render() {
        return (
            <BrowserRouter>
                <div style={{flexGrow: 1}}>
                    <AppBar position={"static"}>
                        <Toolbar>
                            <Typography style={{marginRight: 20, marginLeft: -12, flexGrow: 1}} variant={'h6'}
                                        color={'inherit'} aria-label={'Menu'}>
                                Podcast
                            </Typography>
                            <SessionButtons/>
                        </Toolbar>
                    </AppBar>

                    <Switch>
                        <Redirect exact from={'/'} to={"/login"}/>
                        <Route exact path={'/login'} component={Login}/>
                        <Route exact path={'/registration'} component={Registration}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default SessionUser;
