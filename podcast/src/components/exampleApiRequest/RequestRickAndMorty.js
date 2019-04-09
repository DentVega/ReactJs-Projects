import React, {Component} from 'react';
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";

class RequestRickAndMorty extends Component {

    state = {
        loading: true,
        error: null,
        data: {
            results: [],
        }
    };

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/')
            const data = await response.json();
            console.log(data);
            this.setState({
                loading: false,
                data: data
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

        return (
            <div>
                Request Rick And Morty
                {
                    this.state.loading && (
                        <CircularProgress>

                        </CircularProgress>
                    )
                }
                {
                    this.state.data.results.map(character => (
                        <li key={character.id}>
                            {character.name}
                        </li>
                    ))
                }
            </div>
        );
    }
}

export default RequestRickAndMorty;
