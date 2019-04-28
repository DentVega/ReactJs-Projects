import React, {Component} from 'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";

class AppBarHome extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="fixed"
                        className={classNames(classes.appBar, {[classes.appBarShift]: this.props.open,})}>
                    <Toolbar disableGutters={!this.props.open}>
                        <IconButton color="inherit" aria-label="Open drawer" onClick={this.props.handleDrawerOpen}
                                    className={classNames(classes.menuButton, {[classes.hide]: this.props.open,})}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Podcast
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default AppBarHome;
