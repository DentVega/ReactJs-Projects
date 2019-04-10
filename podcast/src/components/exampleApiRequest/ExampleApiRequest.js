import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/es/Button/Button";

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
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

    fetchGet = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        const data = await response.json();
        console.log(data);

        const response1 = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
            .then(response => response.json())
            .then(json => console.log(json));

    };

    fetchPost = async () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    };

    fetchPatch() {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'foo'
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    };

    fetchPut = async () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    };

    fetchDelete = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
        })
    };

    render() {
        const {classes} = this.props;
        if (this.state.error) {
            return `Error: ${this.state.error.message}`
        }

        return (
            <div>
                <Button onClick={() => this.fetchGet()} variant="contained" color="primary" className={classes.button}>Fetch Get</Button>
                <Button onClick={() => this.fetchPost()} variant="contained" color="primary" className={classes.button}>Fetch Post</Button>
                <Button onClick={() => this.fetchPatch()} variant="contained" color="primary" className={classes.button}>Fetch Patch</Button>
                <Button onClick={() => this.fetchPut()} variant="contained" color="primary" className={classes.button}>Fetch Put</Button>
                <Button onClick={() => this.fetchDelete()} variant="contained" color="primary" className={classes.button}>Fetch Delete</Button>
            </div>
        );
    }
}

export default withStyles(styles)(ExampleApiRequest);
