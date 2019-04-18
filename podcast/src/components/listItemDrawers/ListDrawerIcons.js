import React, {Component} from 'react';
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";

class ListDrawerIcons extends Component {
    render() {
        const {icons} = this.props;
        const array = [['Home', 'Chat', 'Informacion'],[<InboxIcon/>, <MailIcon/>, <InboxIcon/>]];
        return (
            <List>
                {
                    icons.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))
                }
            </List>
        );
    }
}

export default ListDrawerIcons;
