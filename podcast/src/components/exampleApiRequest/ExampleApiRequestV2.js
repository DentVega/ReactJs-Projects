import React, {Component} from 'react';

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

class ExampleApiRequestV2 extends Component {

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
        const response = await fetch('https://rickandmortyapi.com/api/character/')
        const data = await response.json();
        this.setState({
            data: data,
        })
    };

    render() {
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
            </div>
        );
    }
}

export default ExampleApiRequestV2;
