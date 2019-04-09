import React, {Component} from 'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/es/Typography/Typography";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
};

class AppBarLogin extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant={"h5"} color={"inherit"} className={classes.grow}>
                            PodCast
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(AppBarLogin);
