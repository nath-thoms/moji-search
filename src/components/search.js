import React from "react";

class Search extends React.Component {
    state = {
        newSearchTerm: ""
    };

    render() {
        return (
            <form>
                <input
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.newSearchTerm}
                />
                <button type="submit" onClick={this.handleClick}>
                    Search for Emoji!
        </button>
            </form>
        );
    }

    handleChange = event => {
        const { changeSearchTerm } = this.props
        changeSearchTerm(event.target.value)
        this.setState({ newSearchTerm: event.target.value });
        console.log(this.state.newSearchTerm);
    };
}

export default Search;
