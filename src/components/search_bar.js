
import React, {Component} from 'react';

// const SearchBar = () => {
//     return <input />
// }

class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    render(){
        return(
            <div className='search-bar'>
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({
            term: term
        });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;