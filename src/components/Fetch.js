import React, { Component } from 'react';
import Card from './Card';
import Header from './Header';
import SearchBox from './SearchBox';

class Fetch extends Component {
    constructor(props){
        super(props);
        this.state = {
        movies:[],
        searchmovie :"",
        }
    }


    handleSearchInput = (e) => {
        this.setState({
            searchmovie: e.target.value,
        });
    }

    handleSearchBtn = (e) => {
        this.fetchApiCall(this.state.searchmovie);
        e.preventDefault();
    }


    fetchApiCall(movie){
        fetch(`http://www.omdbapi.com/?s=${movie}&apikey=7aa2361c`)
        .then((response) => {
            if(response.status !== 200) throw response;
                return response.json();
        })
        .then((data) => {
            this.setState({ movies:data.Search});
            console.log("data", data);
          })
          .catch((error) => {
            alert("Movie Not Found");
          });
    }

    render(){
        const{searchmovie, movies}=this.state;
        return(
            <>
                <Header/>
                <SearchBox searchValue={searchmovie}
                handleSearchInput={this.handleSearchInput}
                handleSearchBtn={this.handleSearchBtn}
                />
                <div className="main">
                {movies.map((movie)=>(
                    <Card title={movie.Title} source={movie.Poster} year={movie.Year}/>)
                )}
                </div>
            </>
        )
    }
}

export default Fetch;