import React, { Component } from 'react'
import { Input } from 'antd';
import './Home.scss'
import SongCard from '../components/SongCard';
import { Link } from 'react-router-dom'

const { Search } = Input;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            results: []
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(value) {
        const term = value;
        if (term !== '') {
            const termsArray = term.split(' ');
            const query = termsArray.join('&');
            console.log(query);
            fetch('https://itunes.apple.com/search?term=' + query + '&limit=20')
                .then(response => response.json())
                .then(responseJSON => {
                    console.log(responseJSON);
                    this.setState({
                        results: responseJSON.results
                    });
                });
        }
    }

    render() {
        return (
            <div>
                <div className='searchWrapper'>
                    <Search className='search' placeholder="input search text" onSearch={value => this.handleSearch(value)} enterButton="Search" size="large" />
                </div>
                <div className='cardsContainer'>
                {this.state.results.map((item, index) => {
                    return (
                        <SongCard
                            key={index}
                            item={item}
                        />

                    );
                })}
                </div>
                <Link to='/dummy'>
                    Dummy
                </Link>
            </div>
        )
    }
}
