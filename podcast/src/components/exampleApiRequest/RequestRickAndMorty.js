import React, {Component} from 'react';
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";
import RequestRickAndMortyPresentational from "./RequestRickAndMortyPresentational";
//https://rickandmortyapi.com/

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

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.data.results !== this.state.data.results;
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
        return (
            <div>
                <h1>Rick And Morty</h1>
                {
                    this.state.loading ?
                        <CircularProgress/> :
                        <RequestRickAndMortyPresentational data={this.state.data} fetchCharacters={this.fetchCharacters}/>
                }
            </div>
        );
    }
}

export default RequestRickAndMorty;
