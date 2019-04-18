import React from 'react';
import GridList from "@material-ui/core/es/GridList";
import GridListTile from "@material-ui/core/es/GridListTile";
import ListSubheader from "@material-ui/core/es/ListSubheader";
import Button from "@material-ui/core/es/Button";
import GridListTileBar from "@material-ui/core/es/GridListTileBar";
import IconButton from "@material-ui/core/es/IconButton";
import InfoIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    button: {
        margin: theme.spacing.unit,
    },
});

function RequestRickAndMortyPresentational(props) {
    const {classes} = props;
    console.log("render");
    return (
        <div className={classes.root}>
            <GridList>
                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                    <ListSubheader component="div">
                        Lista de personajes
                        <Button
                            onClick={props.fetchCharacters}
                            variant="contained"
                            color="primary"
                            className={classes.button}>More</Button>
                    </ListSubheader>
                </GridListTile>
                {
                    props.data.results.map(character => (
                        <GridListTile key={character.id}>
                            <img src={character.image} alt={character.status}/>
                            <GridListTileBar
                                title={character.name}
                                subtitle={character.species}
                                actionIcon={
                                    <IconButton className={classes.icon}>
                                        <InfoIcon/>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))
                }
            </GridList>

        </div>
    )
}

export default withStyles(styles)(RequestRickAndMortyPresentational);
