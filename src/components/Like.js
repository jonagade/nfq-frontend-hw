import React from 'react';

class Like extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLiked: false,
        };

        this.toggleLike = this.toggleLike.bind(this);
    }

    toggleLike = () => {
        this.setState({
            isLiked: !this.state.isLiked,
        })
    };

    render() {
        return (
            <button onClick={this.toggleLike}>
                {this.state.isLiked ? 'Unlike' : 'Like'}
            </button>
        )
    }
}

export default Like;