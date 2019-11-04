import React from 'react';

class Genre extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            genreList: [],
        };
    }

    render() {
        const {text, click} = this.props;

        return (
            <button className="genre" onClick={click}>
                {text}
            </button>
        )
    }
}

export default Genre;