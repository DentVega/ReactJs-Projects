import React, {Component} from 'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import './AppBarLoginCss.css';
import Button from "@material-ui/core/es/Button/Button";

class AppBarLoginCss extends Component {
    render() {
        return (
            <div className={"root"}>
                <AppBar>
                    <Toolbar>
                        <IconButton className={"menuButton"} color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant={"h5"} color={"inherit"} className={"grow"}>
                            Login
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default AppBarLoginCss;
