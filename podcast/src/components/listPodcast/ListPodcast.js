import React, {Component} from 'react';
//https://api.audioboom.com/

class ListPodcast extends Component {

    componentDidMount() {

    }

    fetchPodcasts = async () => {
        const response = await fetch(``);
        const data = await response.json();
        console.log(data);
        
    };

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default ListPodcast;
