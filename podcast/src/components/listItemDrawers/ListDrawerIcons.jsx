import {MENU_HOME, SECONDARY_MENU, DEVELOPMENT_MENU} from "./menusText";
import React, {Component} from 'react';
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import Home from '@material-ui/icons/Home';
import Chat from '@material-ui/icons/Chat';
import Info from '@material-ui/icons/Info';
import DeveloperBoard from '@material-ui/icons/DeveloperBoard';
import Favorite from '@material-ui/icons/Favorite';
import Announcement from '@material-ui/icons/Announcement';
import LibraryMusic from '@material-ui/icons/LibraryMusic';
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import {Link} from "react-router-dom";

class ListDrawerIcons extends Component {


    static menuHome() {
        return MENU_HOME.map((item, index) => (
            <Link to={item[2]}>
                <ListItem button key={item[0]}>
                    <ListItemIcon>
                        {
                            index === 0 ? <Home/>
                                : index === 1 ? <Chat/>
                                : <LibraryMusic/>
                        }
                    </ListItemIcon>
                    <ListItemText primary={item[1]}/>
                </ListItem>
            </Link>
        ))
    }

    static menuSecondary() {
        return SECONDARY_MENU.map((item, index) => (
            <Link to={item[2]}>
                <ListItem button key={item[0]}>
                    <ListItemIcon>
                        {
                            index === 0 ? <Favorite/> : index === 1 ? <Announcement/> : <Info/>
                        }
                    </ListItemIcon>
                    <ListItemText primary={item[1]}/>
                </ListItem>
            </Link>
        ))
    }

    static menuDevelopment() {
        return DEVELOPMENT_MENU.map((item) => (
            <Link to={item[2]}>
                <ListItem button key={item[0]}>
                    <ListItemIcon>
                        <DeveloperBoard/>
                    </ListItemIcon>
                    <ListItemText primary={item[1]}/>
                </ListItem>
            </Link>
        ))
    }

    renderItemsDrawer() {
        switch (this.props.menu) {
            case 'Home':
                return ListDrawerIcons.menuHome();
            case 'Secondary' :
                return ListDrawerIcons.menuSecondary();
            case 'Development' :
                return ListDrawerIcons.menuDevelopment();
            default:
                return null;
        }
    }

    render() {
        return (
            <List>
                {
                    this.renderItemsDrawer()
                }
            </List>
        );
    }
}

export default ListDrawerIcons;
