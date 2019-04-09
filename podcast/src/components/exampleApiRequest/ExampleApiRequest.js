import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";
import Button from "@material-ui/core/es/Button/Button";

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

function CharacterCard(props) {
    const {character} = props;

    return (
        <div
            className="CharacterCard"
            style={{backgroundImage: `url(${character.image})`}}
        >
            <div className="CharacterCard__name-container text-truncate">
                {character.name}
            </div>
        </div>
    );
}

class ExampleApiRequest extends Component {

    state = {
        nextPage: 1,
        loading: true,
        error: null,
        data: {
            results: [],
        },
    };

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        this.setState({loading: true, error: null});

        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
            const data = await response.json();
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
                error: error,
            })
        }

    };

    render() {
        const { classes } = this.props;
        if (this.state.error){
            return `Error: ${this.state.error.message}`
        }

        return (
            <div>
                <ul className={"row"}>
                    {
                        this.state.data.results.map(character => (
                            <li className={"col-6 col-md-3"} key={character.id}>
                                <CharacterCard character={character}/>
                            </li>
                        ))
                    }
                </ul>
                {
                    this.state.loading && (
                        <CircularProgress className={classes.progress}/>
                    )
                }

                {
                    !this.state.loading && (
                        <Button onClick={() => this.fetchCharacters()}>Load More</Button>
                    )
                }
            </div>
        );
    }
}

export default withStyles(styles) (ExampleApiRequest);
