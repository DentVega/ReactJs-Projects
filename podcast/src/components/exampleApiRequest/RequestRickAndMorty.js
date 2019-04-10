import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";
import GridList from "@material-ui/core/es/GridList/GridList";
import GridListTile from "@material-ui/core/es/GridListTile/GridListTile";
import ListSubheader from "@material-ui/core/es/ListSubheader/ListSubheader";
import GridListTileBar from "@material-ui/core/es/GridListTileBar/GridListTileBar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Button from "@material-ui/core/es/Button/Button";
//https://rickandmortyapi.com/

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

class RequestRickAndMorty extends Component {

    state = {
        nextPage: 1,
        loading: true,
        error: null,
        data: {
            results: [],
        }
    };

    componentDidMount() {
        // noinspection JSIgnoredPromiseFromCall
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        this.setState({loading: true, error: null});
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
            const data = await response.json();
            console.log(data);
            this.setState({
                loading: false,
                data: {
                    info: data.info,
                    results: [].concat(
                        this.state.data.results, data.results
                    )
                },
                nextPage: this.state.nextPage + 1,
            })
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            })
        }
    };

    render() {
        if (this.state.error) {
            return `Error: ${this.state.error.message}`
        }
        const {classes} = this.props;
        return (
            <div>
                <h1>Rick And Morty</h1>
                {
                    this.state.loading ?
                        <CircularProgress/> :
                        <div className={classes.root}>
                            <GridList>
                                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                                    <ListSubheader component="div">
                                        Lista de personajes
                                        <Button onClick={() => this.fetchCharacters()} variant="contained" color="primary" className={classes.button}>More</Button>
                                    </ListSubheader>
                                </GridListTile>
                                {
                                    this.state.data.results.map(character => (
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
                }
            </div>
        );
    }
}

export default withStyles(styles)(RequestRickAndMorty);
