import React, {Component, Fragment} from 'react';
import './App.css';
// noinspection ES6CheckImport
import PropTypes from "prop-types";
import classNames from 'classnames';
import jsxStyles from "./styles/jsxStyles";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Typography from "@material-ui/core/es/Typography/Typography";
import Divider from "@material-ui/core/es/Divider/Divider";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/login/Login";
import NotFound from "./components/notFound/NotFound";
import Registration from "./pages/registration/Registration";
import ExampleApiRequest from "./components/exampleApiRequest/ExampleApiRequest";
import ListDrawerIcons from "./components/listItemDrawers/ListDrawerIcons";
import Channels from "./components/listPodcast/Channels";


class App extends Component {
    state = {
        open: false,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        },
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    loadRegistration = () => {
        return <Registration onChange={this.handleChange} form={this.state.form}/>
    };

    render() {
        const {classes, theme} = this.props;
        const classesOpen = {[classes.drawerOpen]: this.state.open, [classes.drawerClose]: !this.state.open,};
        return (
            <BrowserRouter className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed"
                        className={classNames(classes.appBar, {[classes.appBarShift]: this.state.open,})}>
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen}
                                    className={classNames(classes.menuButton, {[classes.hide]: this.state.open,})}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>Podcast</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent" open={this.state.open}
                    className={classNames(classes.drawer, classesOpen)} classes={{paper: classNames(classesOpen),}}>
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <ListDrawerIcons menu={'Home'}/>
                    <Divider/>
                    <ListDrawerIcons menu={'Secondary'}/>
                    <Divider/>
                    <ListDrawerIcons menu={'Development'}/>
                </Drawer>
                <main className={classes.content}>
                    <Fragment className={classes.toolbar}>
                        <Switch>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/registration" component={this.loadRegistration}/>
                            <Route exact path="/test" component={ExampleApiRequest}/>
                            <Route exact path="/channels" component={Channels}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Fragment>
                </main>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(jsxStyles, {withTheme: true})(App);
