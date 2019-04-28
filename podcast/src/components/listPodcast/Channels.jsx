import React, {Component} from 'react';
import List from "@material-ui/core/es/List/List";
import {withStyles} from '@material-ui/core/styles';
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";

class Channels extends Component {

    constructor(props) {
        super(props);
        this.state = {
            channels: []
        }
    }

    componentDidMount() {
        fetch('https://api.audioboom.com/channels')
            .then(response => {
                console.log(response);
                response.json()
            })
            .then(result => {
                console.log(result);
                this.setState({
                    channels: result.body.channels,
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {channels} = this.state;
        return (
            <div>
                Test Channels
                <h1>Test 2</h1>
                <h1>Test 2</h1>
                <h1>Test 2</h1>
                <h1>Test 2</h1>
                <h1>Test 2</h1>

                {
                    channels.length === 0 ? (
                        <CircularProgress/>) : (
                        <List>
                            {channels.map(item => {
                                return (
                                    <ListItem key={item.id}>
                                        <ListItemText/>
                                        <Typography>{item.title}</Typography>
                                        <Button color={"primary"} variant={"contained"}>Ver</Button>
                                    </ListItem>
                                )
                            })}
                        </List>
                    )
                }
            </div>
        );
    }
}

export default withStyles(null)(Channels);
