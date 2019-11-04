import React from 'react';
import Card from './Card';
import Genre from './Genre';
import axios from 'axios';
import {endpoints, getImageUrl} from '../config';

class App extends React.Component{
    constructor() {
        super();

        this.state = {
            genreList: [],
            movieList: [],
        };
    }

    componentDidMount() {
        axios.get(endpoints.mostPopularMovies()).then(response => {
            this.setState({
                movieList: response.data.results,
            });
        });

        axios.get(endpoints.genres()).then(response => {
            this.setState({
                genreList: response.data.genres,
            });
        });
    }

    filterMovies = (genre) => {
        axios.get(endpoints.genreMovies(genre)).then(response => {
            this.setState({
                movieList: response.data.results,
            });
        });
    };

    render() {
        return (
            <div>
                <section className="genres">
                    {this.state.genreList.map(genre => (
                        <Genre
                            key={genre.id}
                            text={genre.name}
                            click={this.filterMovies.bind(this, genre.id)}
                        />
                    ))}
                </section>

                <section className="cards">
                    {this.state.movieList.map((card) => (
                        <Card
                            key={card.id}
                            title={card.original_title}
                            backgroundImage={getImageUrl(card.backdrop_path)}
                            data={card.release_date}
                            voteAverage={card.vote_average}
                            voteCount={card.vote_count}
                            description={card.overview}
                        />
                    ))}
                </section>
            </div>
        );
    }
}

export default App;