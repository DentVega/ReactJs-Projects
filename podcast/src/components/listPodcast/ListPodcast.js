import React, {Component} from 'react';
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";
import GridListTile from "@material-ui/core/es/GridListTile";
import GridListTileBar from "@material-ui/core/es/GridListTileBar";
import IconButton from "@material-ui/core/es/IconButton";
import InfoIcon from "@material-ui/core/SvgIcon/SvgIcon";

//https://api.audioboom.com/

class ListPodcast extends Component {

    state = {
        channels: [],
        loading: true,
    };

    componentDidMount() {
        this.fetchPodcasts()
    }

    fetchPodcasts = async () => {
        const response = await fetch(`https://api.audioboom.com/channels`);
        const data = await response.json();
        console.log(data);
        this.setState({
            loading: false,
            channels: data.body.channels
        })
    };

    renderPodcast() {
        console.log(this.state.channels);
        this.state.channels.map(podcast => (
            <GridListTile key={podcast.id}>
                {console.log(podcast)}
                <img src={podcast.urls.banner_image} alt={podcast.id}/>
                <GridListTileBar


                />
            </GridListTile>
        ))
    }

    render() {
        return (
            <div>
                {
                    this.state.loading ? <CircularProgress/> : this.state.channels.size == 0 ?
                        <h1>No existen podast</h1> : this.renderPodcast()
                }
            </div>
        );
    }
}

export default ListPodcast;
