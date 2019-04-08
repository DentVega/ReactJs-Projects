import React, {Component} from 'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/es/Typography/Typography";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/es/Button/Button";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    button: {
        border: "1px solid white",
        margin: 4,
    }
};

class AppBarHome extends Component {

    loadLogin = () => {
        this.props.changePage("login")
    };

    loadRegistration = () => {
        this.props.changePage("registration")
    };

    loadTestPage = () => {
        this.props.changePage("testPage")
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position={"static"}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant={"h5"} color={"inherit"} className={classes.grow}>
                            PodCast
                        </Typography>
                        <Button className={classes.button} color="inherit" onClick={this.loadLogin}>Sign In</Button>
                        <Button className={classes.button} color="inherit" onClick={this.loadRegistration}>Sign
                            Up</Button>
                        <Button className={classes.button} color="inherit" onClick={this.loadTestPage}>Test
                            Page</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(AppBarHome);
