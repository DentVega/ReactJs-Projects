import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";

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

class ExampleApiRequestV3 extends Component {

    state = {
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
            const response = await fetch('https://rickandmortyapi.com/api/character/')
            const data = await response.json();
            this.setState({
                loading: false,
                data: data,
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
            </div>
        );
    }
}

export default withStyles(styles) (ExampleApiRequestV3);
